import jwt from 'jsonwebtoken';
import User from '../models/Users.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware to verify JWT token
export const requireAuth = async (req, res, next) => {
  try {
    // Skip auth check for login page and static assets
    if (req.path === '/login' || 
        req.path.startsWith('/css/') || 
        req.path.startsWith('/js/') || 
        req.path.startsWith('/images/') ||
        req.path === '/favicon.ico') {
      return next();
    }

    // Get token from cookies (preferred) or Authorization header
    let token = req.cookies?.token || 
               (req.header('Authorization')?.startsWith('Bearer ') ? 
                req.header('Authorization').replace('Bearer ', '') : null);
    
    // If no token, handle based on request type
    if (!token) {
      if (req.path.startsWith('/api/')) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
      }
      // For non-API requests, redirect to login with the intended URL
      return res.redirect(`/login?redirectTo=${encodeURIComponent(req.originalUrl)}`);
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user || !user.isActive) {
      // Clear invalid token
      res.clearCookie('token');
      if (req.path.startsWith('/api/')) {
        return res.status(401).json({ error: 'Invalid token or user not found.' });
      }
      return res.redirect('/login');
    }

    // Attach user to request object
    req.user = user;
    
    // For API requests, set the token in the response header
    if (req.path.startsWith('/api/')) {
      res.setHeader('Authorization', `Bearer ${token}`);
    } else {
      // For view requests, ensure the token is in cookies
      if (!req.cookies?.token) {
        res.cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 24 * 60 * 60 * 1000 // 1 day
        });
      }
    }
    
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    // Clear invalid token
    res.clearCookie('token');
    
    if (req.path.startsWith('/api/')) {
      return res.status(401).json({ error: 'Invalid or expired token.' });
    }
    res.redirect('/login');
  }
};

// Middleware to require admin role
export const requireAdmin = async (req, res, next) => {
  try {
    // First check if user is authenticated
    await requireAuth(req, res, (err) => {
      if (err) return next(err);
    });

    // Then check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admin role required.' });
    }

    next();
  } catch (error) {
    console.error('Admin middleware error:', error);
    res.status(403).json({ error: 'Access denied.' });
  }
};

// Generate JWT token
export const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '24h' });
};
