import express from 'express';
import { body } from 'express-validator';
import { 
    createAttachment, 
    getAttachments, 
    getAttachment, 
    updateAttachment,
    updateAttachmentStatus,
    deleteAttachment 
} from '../controllers/attachmentController.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Apply authentication middleware to all routes
router.use(requireAuth);

// Validation rules for creating/updating attachments
const attachmentValidationRules = [
    // Personal Information
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Please include a valid email'),
    body('phone_number').notEmpty().withMessage('Phone number is required'),
    body('gender').isIn(['Male', 'Female']).withMessage('Please select a valid gender'),
    body('date_of_birth').isISO8601().withMessage('Please provide a valid date of birth'),
    body('residential_location').notEmpty().withMessage('Residential location is required'),
    
    // Education Information
    body('institution').isMongoId().withMessage('Please select a valid institution'),
    body('department').isMongoId().withMessage('Please select a valid department'),
    body('course').isMongoId().withMessage('Please select a valid course'),
    body('year_of_study').isIn(['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'])
        .withMessage('Please select a valid year of study'),
    body('expected_graduation_date').isISO8601().withMessage('Please provide a valid expected graduation date'),
    
    // Additional Information
    body('about_yourself').notEmpty().withMessage('Please tell us about yourself'),
    body('community_engagement_statement').notEmpty().withMessage('Community engagement statement is required'),
    body('understanding_of_swahilipot').notEmpty().withMessage('Please share your understanding of Swahilipot'),
    
    // Terms and Conditions
    body('agree_terms').isBoolean().withMessage('You must agree to the terms and conditions'),
    
    // Optional fields
    body('middle_name').optional().trim(),
    body('available_start_date').optional().isISO8601().withMessage('Please provide a valid available start date'),
    body('can_attend_onsite').optional().isBoolean(),
    body('linkedin_url').optional().isURL().withMessage('Please provide a valid LinkedIn URL'),
    body('github_url').optional().isURL().withMessage('Please provide a valid GitHub URL'),
    body('agree_communications').optional().isBoolean()
];

// Routes
router.route('/')
    .get(getAttachments)
    .post(attachmentValidationRules, createAttachment);

router.route('/:id')
    .get(getAttachment)
    .put(attachmentValidationRules, updateAttachment)
    .delete(deleteAttachment);

router.patch('/:id/status', [
    body('status').isIn(['pending', 'approved', 'rejected']).withMessage('Invalid status')
], updateAttachmentStatus);

export default router;
