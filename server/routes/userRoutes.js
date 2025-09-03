import express from "express";
import User from "../models/Users.js";
import IndustrialAttachment from "../models/IndustrialAttachment.js";
import LearningInstitution from "../models/LearningInstitution.js";
import Course from "../models/Course.js";
import Department from "../models/Department.js";
import { cacheMiddleware } from '../middleware/cache.js';

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  await user.save();
  res.status(201).json(user);
});

// Industrial Attachment Routes
router.post("/industrial-attachments", async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      phone,
      email,
      institution,
      course,
      location,
      dob,
      resumeUrl,
      coverLetterUrl,
      gender,
      department,
      yearOfStudy,
      graduationDate,
      availableStart,
      onsite,
      agreeTerms,
      agreeComms,
      about,
      community,
      understanding,
      linkedin,
      github
    } = req.body;

    // Check if email already exists
    const existingApplication = await IndustrialAttachment.findOne({ email });
    if (existingApplication) {
      return res.status(400).json({ 
        message: "An application with this email already exists" 
      });
    }

    // Create new industrial attachment application
    const industrialAttachment = new IndustrialAttachment({
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      phone_number: phone,
      email,
      institution: institution, // This should be an ObjectId reference
      course: course, // This should be an ObjectId reference
      residential_location: location,
      date_of_birth: new Date(dob),
      resume_url: resumeUrl,
      cover_letter_url: coverLetterUrl,
      gender,
      department: department, // This should be an ObjectId reference
      year_of_study: yearOfStudy,
      expected_graduation_date: new Date(graduationDate),
      available_start_date: new Date(availableStart),
      can_attend_onsite: onsite,
      agree_terms: agreeTerms,
      agree_communications: agreeComms,
      about_yourself: about,
      community_engagement_statement: community,
      understanding_of_swahilipot: understanding,
      linkedin_url: linkedin,
      github_url: github
    });

    await industrialAttachment.save();

    // Generate a reference ID (you can customize this format)
    const referenceId = `IA-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    res.status(201).json({
      message: "Application submitted successfully",
      referenceId,
      applicationId: industrialAttachment._id
    });

  } catch (error) {
    console.error("Error submitting industrial attachment:", error);
    res.status(500).json({ 
      message: "Internal server error",
      error: error.message 
    });
  }
});

// Get available institutions
router.get("/institutions", cacheMiddleware(3600), async (req, res) => {
  try {
    const institutions = await LearningInstitution.find()
      .select('name county')
      .lean() // Convert to plain objects for better performance
      .sort({ name: 1 }); // Sort alphabetically for better UX
    
    res.json(institutions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching institutions", error: error.message });
  }
});

// Get available courses
router.get("/courses", cacheMiddleware(1800), async (req, res) => {
  try {
    const { institution } = req.query;
    let query = {};
    
    if (institution) {
      query.institution = institution;
    }
    
    const courses = await Course.find(query)
      .select('name certification institution')
      .populate('institution', 'name')
      .lean() // Convert to plain objects for better performance
      .sort({ name: 1 }); // Sort alphabetically for better UX
      
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error: error.message });
  }
});

// Get available departments
router.get("/departments", cacheMiddleware(3600), async (req, res) => {
  try {
    const departments = await Department.find()
      .select('name description')
      .lean() // Convert to plain objects for better performance
      .sort({ name: 1 }); // Sort alphabetically for better UX
    
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching departments", error: error.message });
  }
});

export default router;