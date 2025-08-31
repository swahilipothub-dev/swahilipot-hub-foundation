// Admin controller for dashboard features
import IndustrialAttachment from '../models/IndustrialAttachment.js';
import Department from '../models/Department.js';
import LearningInstitution from '../models/LearningInstitution.js';
import Course from '../models/Course.js';
import Users from '../models/Users.js';
import { Parser } from 'json2csv';

// Attachments CRUD
export const getAttachments = async (req, res) => {
  try {
    const { includeArchived = 'false' } = req.query;
    const query = includeArchived === 'true' ? {} : { is_archived: { $ne: true } };
    
    const data = await IndustrialAttachment.find(query)
      .populate('institution', 'name')
      .populate('course', 'name')
      .populate('department', 'name')
      .sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    console.error('Error fetching attachments:', error);
    res.status(500).json({ 
      error: 'Failed to fetch attachments', 
      details: error.message 
    });
  }
};

// Accept/Revoke attachment
export const toggleAcceptance = async (req, res) => {
  try {
    const { id } = req.params;
    const attachment = await IndustrialAttachment.findById(id);
    
    if (!attachment) {
      return res.status(404).json({ error: 'Attachment not found' });
    }
    
    attachment.is_accepted = !attachment.is_accepted;
    await attachment.save();
    
    res.json({ 
      success: true, 
      is_accepted: attachment.is_accepted,
      message: attachment.is_accepted ? 'Application accepted' : 'Application acceptance revoked'
    });
  } catch (error) {
    console.error('Error toggling acceptance:', error);
    res.status(500).json({ 
      error: 'Failed to toggle acceptance', 
      details: error.message 
    });
  }
};

// Archive/Unarchive attachment
export const toggleArchive = async (req, res) => {
  try {
    const { id } = req.params;
    const attachment = await IndustrialAttachment.findById(id);
    
    if (!attachment) {
      return res.status(404).json({ error: 'Attachment not found' });
    }
    
    attachment.is_archived = !attachment.is_archived;
    await attachment.save();
    
    res.json({ 
      success: true, 
      is_archived: attachment.is_archived,
      message: attachment.is_archived ? 'Application archived' : 'Application unarchived'
    });
  } catch (error) {
    console.error('Error toggling archive:', error);
    res.status(500).json({ 
      error: 'Failed to toggle archive', 
      details: error.message 
    });
  }
};
export const createAttachment = async (req, res) => {
  try {
    console.log('Creating attachment with data:', req.body);
    
    // Handle institution, course, and department creation if they don't exist
    let attachmentData = { ...req.body };
    
    // Handle institution
    if (attachmentData.institution && typeof attachmentData.institution === 'object' && attachmentData.institution.name) {
      let institution = await LearningInstitution.findOne({ name: attachmentData.institution.name });
      if (!institution) {
        institution = new LearningInstitution({ 
          name: attachmentData.institution.name,
          county: 'Nairobi' // Default county, you might want to make this configurable
        });
        await institution.save();
      }
      attachmentData.institution = institution._id;
    }
    
    // Handle course
    if (attachmentData.course && typeof attachmentData.course === 'object' && attachmentData.course.name) {
      let course = await Course.findOne({ name: attachmentData.course.name });
      if (!course) {
        course = new Course({ 
          name: attachmentData.course.name,
          certification: 'Degree', // Default certification, you might want to make this configurable
          institution: attachmentData.institution // Use the institution we just created/found
        });
        await course.save();
      }
      attachmentData.course = course._id;
    }
    
    // Handle department
    if (attachmentData.department && typeof attachmentData.department === 'object' && attachmentData.department.name) {
      let department = await Department.findOne({ name: attachmentData.department.name });
      if (!department) {
        department = new Department({ 
          name: attachmentData.department.name,
          description: `Department for ${attachmentData.department.name}`
        });
        await department.save();
      }
      attachmentData.department = department._id;
    }
    
    // Provide default values for required fields if they're empty
    if (!attachmentData.resume_url || attachmentData.resume_url.trim() === '') {
      attachmentData.resume_url = 'placeholder_resume_url';
    }
    if (!attachmentData.cover_letter_url || attachmentData.cover_letter_url.trim() === '') {
      attachmentData.cover_letter_url = 'placeholder_cover_letter_url';
    }
    
    const item = new IndustrialAttachment(attachmentData);
    await item.save();
    res.json(item);
  } catch (error) {
    console.error('Error creating attachment:', error);
    res.status(500).json({ 
      error: 'Failed to create attachment', 
      details: error.message,
      validationErrors: error.errors 
    });
  }
};
export const updateAttachment = async (req, res) => {
  try {
    console.log('Updating attachment with data:', req.body);
    
    // Handle institution, course, and department creation if they don't exist
    let attachmentData = { ...req.body };
    
    // Handle institution
    if (attachmentData.institution && typeof attachmentData.institution === 'object' && attachmentData.institution.name) {
      let institution = await LearningInstitution.findOne({ name: attachmentData.institution.name });
      if (!institution) {
        institution = new LearningInstitution({ 
          name: attachmentData.institution.name,
          county: 'Nairobi' // Default county, you might want to make this configurable
        });
        await institution.save();
      }
      attachmentData.institution = institution._id;
    }
    
    // Handle course
    if (attachmentData.course && typeof attachmentData.course === 'object' && attachmentData.course.name) {
      let course = await Course.findOne({ name: attachmentData.course.name });
      if (!course) {
        course = new Course({ 
          name: attachmentData.course.name,
          certification: 'Degree', // Default certification, you might want to make this configurable
          institution: attachmentData.institution // Use the institution we just created/found
        });
        await course.save();
      }
      attachmentData.course = course._id;
    }
    
    // Handle department
    if (attachmentData.department && typeof attachmentData.department === 'object' && attachmentData.department.name) {
      let department = await Department.findOne({ name: attachmentData.department.name });
      if (!department) {
        department = new Department({ 
          name: attachmentData.department.name,
          description: `Department for ${attachmentData.department.name}`
        });
        await department.save();
      }
      attachmentData.department = department._id;
    }
    
    const item = await IndustrialAttachment.findByIdAndUpdate(req.params.id, attachmentData, { new: true });
    if (!item) {
      return res.status(404).json({ error: 'Attachment not found' });
    }
    res.json(item);
  } catch (error) {
    console.error('Error updating attachment:', error);
    res.status(500).json({ 
      error: 'Failed to update attachment', 
      details: error.message,
      validationErrors: error.errors 
    });
  }
};
export const deleteAttachment = async (req, res) => {
  await IndustrialAttachment.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

// Departments CRUD
export const getDepartments = async (req, res) => {
  const data = await Department.find();
  res.json(data);
};
export const createDepartment = async (req, res) => {
  const item = new Department(req.body);
  await item.save();
  res.json(item);
};
export const updateDepartment = async (req, res) => {
  const item = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};
export const deleteDepartment = async (req, res) => {
  await Department.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

// Institutions CRUD
export const getInstitutions = async (req, res) => {
  const data = await LearningInstitution.find();
  res.json(data);
};
export const createInstitution = async (req, res) => {
  const item = new LearningInstitution(req.body);
  await item.save();
  res.json(item);
};
export const updateInstitution = async (req, res) => {
  const item = await LearningInstitution.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};
export const deleteInstitution = async (req, res) => {
  await LearningInstitution.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

// Courses CRUD
export const getCourses = async (req, res) => {
  const data = await Course.find().populate('institution', 'name county');
  res.json(data);
};
export const createCourse = async (req, res) => {
  const item = new Course(req.body);
  await item.save();
  const populatedItem = await Course.findById(item._id).populate('institution', 'name county');
  res.json(populatedItem);
};
export const updateCourse = async (req, res) => {
  const item = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('institution', 'name county');
  res.json(item);
};
export const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

// Users CRUD
export const getUsers = async (req, res) => {
  const data = await Users.find();
  res.json(data);
};
export const createUser = async (req, res) => {
  const item = new Users(req.body);
  await item.save();
  res.json(item);
};
export const updateUser = async (req, res) => {
  const item = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};
export const deleteUser = async (req, res) => {
  await Users.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

// Enhanced Analytics with detailed metrics
export const getAnalytics = async (req, res) => {
  try {
    // Basic counts
    const totalAttachments = await IndustrialAttachment.countDocuments();
    const totalDepartments = await Department.countDocuments();
    const totalInstitutions = await LearningInstitution.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalUsers = await Users.countDocuments();

    // Attachment status breakdown
    const acceptedAttachments = await IndustrialAttachment.countDocuments({ is_accepted: true, is_archived: false });
    const pendingAttachments = await IndustrialAttachment.countDocuments({ is_accepted: false, is_archived: false });
    const archivedAttachments = await IndustrialAttachment.countDocuments({ is_archived: true });

    // Acceptance rate calculation
    const acceptanceRate = totalAttachments > 0 ? ((acceptedAttachments / totalAttachments) * 100).toFixed(1) : 0;

    // Department breakdown
    const departmentBreakdown = await IndustrialAttachment.aggregate([
      {
        $lookup: {
          from: 'departments',
          localField: 'department',
          foreignField: '_id',
          as: 'departmentInfo'
        }
      },
      {
        $unwind: '$departmentInfo'
      },
      {
        $group: {
          _id: '$departmentInfo.name',
          count: { $sum: 1 },
          accepted: {
            $sum: {
              $cond: [{ $and: [{ $eq: ['$is_accepted', true] }, { $eq: ['$is_archived', false] }] }, 1, 0]
            }
          },
          pending: {
            $sum: {
              $cond: [{ $and: [{ $eq: ['$is_accepted', false] }, { $eq: ['$is_archived', false] }] }, 1, 0]
            }
          },
          archived: {
            $sum: {
              $cond: [{ $eq: ['$is_archived', true] }, 1, 0]
            }
          }
        }
      },
      {
        $project: {
          department: '$_id',
          count: 1,
          accepted: 1,
          pending: 1,
          archived: 1,
          acceptanceRate: {
            $cond: [
              { $gt: ['$count', 0] },
              { $multiply: [{ $divide: ['$accepted', '$count'] }, 100] },
              0
            ]
          }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Course breakdown
    const courseBreakdown = await IndustrialAttachment.aggregate([
      {
        $lookup: {
          from: 'courses',
          localField: 'course',
          foreignField: '_id',
          as: 'courseInfo'
        }
      },
      {
        $unwind: '$courseInfo'
      },
      {
        $group: {
          _id: '$courseInfo.name',
          count: { $sum: 1 },
          accepted: {
            $sum: {
              $cond: [{ $and: [{ $eq: ['$is_accepted', true] }, { $eq: ['$is_archived', false] }] }, 1, 0]
            }
          },
          pending: {
            $sum: {
              $cond: [{ $and: [{ $eq: ['$is_accepted', false] }, { $eq: ['$is_archived', false] }] }, 1, 0]
            }
          },
          archived: {
            $sum: {
              $cond: [{ $eq: ['$is_archived', true] }, 1, 0]
            }
          }
        }
      },
      {
        $project: {
          course: '$_id',
          count: 1,
          accepted: 1,
          pending: 1,
          archived: 1,
          acceptanceRate: {
            $cond: [
              { $gt: ['$count', 0] },
              { $multiply: [{ $divide: ['$accepted', '$count'] }, 100] },
              0
            ]
          }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Institution breakdown
    const institutionBreakdown = await IndustrialAttachment.aggregate([
      {
        $lookup: {
          from: 'learninginstitutions',
          localField: 'institution',
          foreignField: '_id',
          as: 'institutionInfo'
        }
      },
      {
        $unwind: '$institutionInfo'
      },
      {
        $group: {
          _id: '$institutionInfo.name',
          count: { $sum: 1 },
          accepted: {
            $sum: {
              $cond: [{ $and: [{ $eq: ['$is_accepted', true] }, { $eq: ['$is_archived', false] }] }, 1, 0]
            }
          },
          pending: {
            $sum: {
              $cond: [{ $and: [{ $eq: ['$is_accepted', false] }, { $eq: ['$is_archived', false] }] }, 1, 0]
            }
          },
          archived: {
            $sum: {
              $cond: [{ $eq: ['$is_archived', true] }, 1, 0]
            }
          }
        }
      },
      {
        $project: {
          institution: '$_id',
          count: 1,
          accepted: 1,
          pending: 1,
          archived: 1,
          acceptanceRate: {
            $cond: [
              { $gt: ['$count', 0] },
              { $multiply: [{ $divide: ['$accepted', '$count'] }, 100] },
              0
            ]
          }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Recent activity (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentAttachments = await IndustrialAttachment.countDocuments({
      createdAt: { $gte: thirtyDaysAgo }
    });

    const recentAccepted = await IndustrialAttachment.countDocuments({
      is_accepted: true,
      updatedAt: { $gte: thirtyDaysAgo }
    });

    // Monthly trends (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    const monthlyTrends = await IndustrialAttachment.aggregate([
      {
        $match: {
          createdAt: { $gte: sixMonthsAgo }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 },
          accepted: {
            $sum: {
              $cond: [{ $eq: ['$is_accepted', true] }, 1, 0]
            }
          }
        }
      },
      {
        $project: {
          month: {
            $concat: [
              { $toString: '$_id.year' },
              '-',
              { $toString: '$_id.month' }
            ]
          },
          count: 1,
          accepted: 1
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);

    res.json({
      // Basic metrics
      totalAttachments,
      totalDepartments,
      totalInstitutions,
      totalCourses,
      totalUsers,
      
      // Status breakdown
      acceptedAttachments,
      pendingAttachments,
      archivedAttachments,
      acceptanceRate: parseFloat(acceptanceRate),
      
      // Recent activity
      recentAttachments,
      recentAccepted,
      
      // Breakdowns
      departmentBreakdown,
      courseBreakdown,
      institutionBreakdown,
      
      // Trends
      monthlyTrends
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
};

// CSV Export
export const exportCSV = async (req, res) => {
  let data;
  switch (req.params.model) {
    case 'attachments':
      data = await IndustrialAttachment.find();
      break;
    case 'departments':
      data = await Department.find();
      break;
    case 'institutions':
      data = await LearningInstitution.find();
      break;
    case 'courses':
      data = await Course.find().populate('institution', 'name county');
      break;
    case 'users':
      data = await Users.find();
      break;
    default:
      return res.status(400).json({ error: 'Invalid model' });
  }
  const parser = new Parser();
  const csv = parser.parse(data);
  res.header('Content-Type', 'text/csv');
  res.attachment(`${req.params.model}.csv`);
  res.send(csv);
};
