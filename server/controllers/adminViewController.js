import express from 'express';
import mongoose from 'mongoose';
import User from '../models/Users.js';
import IndustrialAttachment from '../models/IndustrialAttachment.js';
import Department from '../models/Department.js';
import LearningInstitution from '../models/LearningInstitution.js';
import Course from '../models/Course.js';

const router = express.Router();

// Helper function to get base view data
const getViewData = (req, title) => {
  return {
    title: title || 'Admin Panel',
    user: req.user,
    messages: {
      success: req.flash('success'),
      error: req.flash('error'),
      info: req.flash('info')
    },
    currentPath: req.path,
    layout: 'admin/layout',
    // Add any other default view data here
    ...(req.viewData || {}) // Allow overriding from route handlers
  };
};

// Admin Dashboard
const getDashboard = async (req, res) => {
  try {
    // Fetch all counts in parallel
    const [totalUsers, activeAttachments, totalDepartments, totalInstitutions] = await Promise.all([
      User.countDocuments({}),
      IndustrialAttachment.countDocuments({ status: 'active' }),
      Department.countDocuments({}),
      LearningInstitution.countDocuments({})
    ]);

    // Get recent activities (last 5 users)
    const recentUsers = await User.find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email role createdAt')
      .lean();

    // Format recent activities
    const recentActivities = recentUsers.map(user => ({
      type: 'user_registered',
      title: 'New user registered',
      description: `${user.name} (${user.email}) registered as ${user.role}`,
      timestamp: user.createdAt,
      icon: 'user-plus',
      color: 'success'
    }));

    // Get base view data
    const viewData = getViewData(req, 'Dashboard');
    
    // Add our custom data
    viewData.stats = {
      totalUsers,
      activeAttachments,
      totalDepartments,
      totalInstitutions
    };
    
    viewData.recentActivities = recentActivities;
    viewData.formatDate = (date) => {
      return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    res.render('admin/dashboard', viewData);
  } catch (error) {
    console.error('Dashboard error:', error);
    // Fallback to empty data if there's an error
    const viewData = getViewData(req, 'Dashboard');
    viewData.stats = {
      totalUsers: 0,
      activeAttachments: 0,
      totalDepartments: 0,
      totalInstitutions: 0
    };
    viewData.recentActivities = [];
    viewData.formatDate = () => '';
    res.render('admin/dashboard', viewData);
  }
};

// Industrial Attachments List
const getAttachments = async (req, res) => {
  try {
    const { status, search } = req.query;
    const query = {};

    // Add status filter if provided
    if (status) {
      query.status = status;
    }

    // Add search filter if provided
    if (search) {
      query.$or = [
        { first_name: { $regex: search, $options: 'i' } },
        { last_name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { 'institution.name': { $regex: search, $options: 'i' } },
        { 'course.name': { $regex: search, $options: 'i' } }
      ];
    }

    const attachments = await IndustrialAttachment.find(query)
      .populate('institution', 'name')
      .populate('department', 'name')
      .populate('course', 'name')
      .sort({ createdAt: -1 });
    
    // Pass the data directly to the view
    res.render('admin/attachments/index', {
      title: 'Industrial Attachments',
      user: req.user,
      attachments: attachments || [],
      currentPath: '/admin/attachments',
      currentFilters: { status, search },
      error: null,
      layout: 'admin/layout'
    });
  } catch (error) {
    console.error('Error fetching attachments:', error);
    res.render('admin/attachments/index', {
      title: 'Industrial Attachments',
      user: req.user,
      attachments: [],
      currentPath: '/admin/attachments', // Add this line for sidebar highlighting
      error: 'Error loading attachments',
      layout: 'admin/layout'
    });
  }
};

// View Single Attachment
const getAttachment = async (req, res) => {
  try {
    const attachment = await IndustrialAttachment.findById(req.params.id)
      .populate('institution', 'name')
      .populate('department', 'name')
      .populate('course', 'name')
      .lean();

    if (!attachment) {
      req.flash('error', 'Attachment not found');
      return res.redirect('/admin/attachments');
    }

    res.render('admin/attachments/view', {
      title: 'View Attachment',
      user: req.user,
      attachment,
      currentPath: '/admin/attachments',
      layout: 'admin/layout'
    });
  } catch (error) {
    console.error('Error fetching attachment:', error);
    req.flash('error', 'Error loading attachment details');
    res.redirect('/admin/attachments');
  }
};

// New Attachment Form
const getNewAttachmentForm = async (req, res) => {
  try {
    // Fetch any necessary data for the form (e.g., departments, institutions, etc.)
    const [departments, institutions, courses] = await Promise.all([
      Department.find({}).select('name').lean(),
      LearningInstitution.find({}).select('name').lean(),
      Course.find({}).select('name').lean()
    ]);

    res.render('admin/attachments/new', {
      title: 'New Industrial Attachment',
      user: req.user,
      currentPath: '/admin/attachments/new',
      departments,
      institutions,
      courses,
      layout: 'admin/layout'
    });
  } catch (error) {
    console.error('Error loading new attachment form:', error);
    req.flash('error', 'Error loading form');
    res.redirect('/admin/attachments');
  }
};

// Departments List
const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find().sort({ name: 1 }).lean();
    const viewData = getViewData(req, 'Departments');
    viewData.departments = departments;
    res.render('admin/departments/index', viewData);
  } catch (error) {
    console.error('Error fetching departments:', error);
    const viewData = getViewData(req, 'Departments');
    viewData.error = 'Error loading departments';
    res.render('admin/departments/index', viewData);
  }
};

// Institutions List
const getInstitutions = async (req, res) => {
  try {
    const institutions = await LearningInstitution.find().sort({ name: 1 }).lean();
    const viewData = getViewData(req, 'Institutions');
    viewData.institutions = institutions;
    res.render('admin/institutions/index', viewData);
  } catch (error) {
    console.error('Error fetching institutions:', error);
    const viewData = getViewData(req, 'Institutions');
    viewData.error = 'Error loading institutions';
    res.render('admin/institutions/index', viewData);
  }
};

// Courses List
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('institution', 'name').sort({ name: 1 }).lean();
    const viewData = getViewData(req, 'Courses');
    viewData.courses = courses;
    res.render('admin/courses/index', viewData);
  } catch (error) {
    console.error('Error fetching courses:', error);
    const viewData = getViewData(req, 'Courses');
    viewData.error = 'Error loading courses';
    res.render('admin/courses/index', viewData);
  }
};

// Users List with pagination and search
const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const search = req.query.search || '';
    const role = req.query.role || '';
    const status = req.query.status !== undefined ? req.query.status === 'true' : null;

    // Build query
    const query = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }
    if (role) query.role = role;
    if (status !== null) query.isActive = status;

    // Get users with pagination
    const users = await User.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .select('-password -__v')
      .lean();

    const count = await User.countDocuments(query);
    const totalPages = Math.ceil(count / limit);

    const viewData = getViewData(req, 'Users Management');
    viewData.users = users;
    viewData.currentPage = page;
    viewData.totalPages = totalPages;
    viewData.totalItems = count; // Add totalItems to the view data
    viewData.search = search;
    viewData.role = role;
    viewData.status = status;
    viewData.roles = ['admin', 'user'];
    viewData.query = { search, role, status }; // Add query object for pagination links
    
    res.render('admin/users/index', viewData);
  } catch (error) {
    console.error('Error fetching users:', error);
    const viewData = getViewData(req, 'Users Management');
    viewData.error = 'Error loading users. Please try again.';
    res.render('admin/users/index', viewData);
  }
};

// View/Edit User
const getUser = async (req, res) => {
  try {
    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      req.flash('error', 'Invalid user ID');
      return res.redirect('/admin/users');
    }

    const user = await User.findById(req.params.id).select('-password -__v').lean();
    if (!user) {
      req.flash('error', 'User not found');
      return res.redirect('/admin/users');
    }

    const viewData = getViewData(req, `Edit User: ${user.name}`);
    viewData.user = user;
    viewData.roles = ['admin', 'user'];
    
    res.render('admin/users/view', viewData);
  } catch (error) {
    console.error('Error fetching user:', error);
    req.flash('error', 'Error loading user data');
    res.redirect('/admin/users');
  }
};

// New User Form
const getNewUserForm = async (req, res) => {
  try {
    const viewData = getViewData(req, 'Create New User');
    viewData.user = { role: 'user', isActive: true }; // Default values
    viewData.roles = ['admin', 'user'];
    
    res.render('admin/users/view', viewData);
  } catch (error) {
    console.error('Error loading user form:', error);
    req.flash('error', 'Error loading user form');
    res.redirect('/admin/users');
  }
};

// Routes
export {
  getDashboard,
  getAttachments,
  getAttachment,
  getNewAttachmentForm,
  getDepartments,
  getInstitutions,
  getCourses,
  getUsers,
  getUser,
  getNewUserForm,
};
