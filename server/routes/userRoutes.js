import express from 'express';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  resetPassword
} from '../controllers/userController.js';
import Department from '../models/Department.js';
import LearningInstitution from '../models/LearningInstitution.js';
import Course from '../models/Course.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Apply authentication middleware to all routes
router.use(requireAuth);

// Get all institutions
router.get('/institutions', async (req, res) => {
  try {
    const institutions = await LearningInstitution.find().select('name county').sort('name');
    res.json(institutions);
  } catch (error) {
    console.error('Error fetching institutions:', error);
    res.status(500).json({ error: 'Failed to fetch institutions' });
  }
});

// Get all departments
router.get('/departments', async (req, res) => {
  try {
    const departments = await Department.find().select('name description').sort('name');
    res.json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
});

// Get all courses with populated institution data
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.aggregate([
      {
        $lookup: {
          from: 'learninginstitutions',
          localField: 'institution',
          foreignField: '_id',
          as: 'institutionData'
        }
      },
      { $unwind: '$institutionData' },
      {
        $project: {
          name: 1,
          certification: 1,
          institution: {
            _id: '$institutionData._id',
            name: '$institutionData.name'
          }
        }
      },
      { $sort: { name: 1 } }
    ]);
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Get all users (admin only)
router.get('/', requireAdmin, getUsers);

// Get single user (admin or own profile)
router.get('/:id', async (req, res, next) => {
  // Allow users to view their own profile, but admins can view any
  if (req.params.id !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Not authorized' });
  }
  next();
}, getUser);

// Create new user (admin only)
router.post('/', requireAdmin, createUser);

// Update user (admin or own profile)
router.put('/:id', async (req, res, next) => {
  // Allow users to update their own profile, but admins can update any
  if (req.params.id !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Not authorized' });
  }
  next();
}, updateUser);

// Delete user (admin only)
router.delete('/:id', requireAdmin, deleteUser);

// Password reset
router.post('/reset-password', resetPassword);

// Import industrial attachment controller
import { createAttachment } from '../controllers/attachmentController.js';

// Industrial Attachment Routes
router.post('/industrial-attachments', createAttachment);

export default router;