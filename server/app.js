import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import adminViewRoutes from "./routes/adminViewRoutes.js";
import attachmentRoutes from "./routes/attachmentRoutes.js";
import expressLayouts from "express-ejs-layouts";


// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();

// Configure CORS with proper credentials support
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:8080', 
      'http://localhost:5173', 
      'http://localhost:3000',
      'http://localhost:5000' // Add your production domain here
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Content-Length', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

app.use(cors(corsOptions));

// Configure cookie parser with a secret
app.use(cookieParser(process.env.COOKIE_SECRET || 'your-secret-key-change-in-production'));

// Trust first proxy (if behind a proxy like nginx)
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Connect flash
app.use(flash());

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'admin/layout'); 

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve login page with redirectTo support
app.get("/login", (req, res) => {
  // If user is already logged in, redirect to admin dashboard
  if (req.cookies?.token) {
    return res.redirect('/admin');
  }
  
  // Explicitly set layout to false to prevent using the admin layout
  res.render('login', { 
    layout: false,
    redirectTo: req.query.redirectTo || '/admin' 
  });
});

// Redirect root to login with redirectTo parameter
app.get("/", (req, res) => {
  res.redirect("/login");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/attachments", attachmentRoutes);

// Admin View Routes
app.use('/admin', adminViewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));