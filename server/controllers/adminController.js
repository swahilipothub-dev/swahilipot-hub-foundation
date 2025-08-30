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
  const data = await Course.find();
  res.json(data);
};
export const createCourse = async (req, res) => {
  const item = new Course(req.body);
  await item.save();
  res.json(item);
};
export const updateCourse = async (req, res) => {
  const item = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

// Analytics (example: count per model)
export const getAnalytics = async (req, res) => {
  const attachments = await IndustrialAttachment.countDocuments();
  const departments = await Department.countDocuments();
  const institutions = await LearningInstitution.countDocuments();
  const courses = await Course.countDocuments();
  const users = await Users.countDocuments();
  res.json({ attachments, departments, institutions, courses, users });
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
      data = await Course.find();
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
