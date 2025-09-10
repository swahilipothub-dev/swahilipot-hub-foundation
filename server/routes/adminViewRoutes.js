import express from 'express';
import { 
  getDashboard,
  getAttachments,
  getAttachment,
  getNewAttachmentForm,
  getDepartments,
  getInstitutions,
  getCourses,
  getUsers,
  getUser,
  getNewUserForm
} from '../controllers/adminViewController.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Apply authentication middleware to all admin routes
router.use(requireAuth);

// Login route - must be after requireAuth to allow access
router.get('/login', (req, res) => {
  // If already logged in, redirect to admin dashboard
  if (req.cookies?.token) {
    return res.redirect('/admin');
  }
  res.render('login', { 
    title: 'Login',
    redirectTo: req.query.redirectTo || '/admin'
  });
});

// Logout route
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});

// Admin dashboard
router.get('/', getDashboard);

// Industrial Attachments
router.get('/attachments', getAttachments);
router.get('/attachments/new', getNewAttachmentForm);
router.get('/attachments/:id', getAttachment);

// Departments
router.get('/departments', getDepartments);

// Institutions
router.get('/institutions', getInstitutions);

// Courses
router.get('/courses', getCourses);

// Users
router.get('/users', getUsers);
router.get('/users/new', getNewUserForm);
router.get('/users/:id', getUser);

export default router;
