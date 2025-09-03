import IndustrialAttachment from '../models/IndustrialAttachment.js';
import { validationResult } from 'express-validator';

// Create a new industrial attachment
export const createAttachment = async (req, res) => {
    try {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false,
                errors: errors.array() 
            });
        }

        const {
            first_name,
            middle_name,
            last_name,
            email,
            phone_number,
            gender,
            date_of_birth,
            residential_location,
            institution,
            department,
            course,
            year_of_study,
            expected_graduation_date,
            available_start_date,
            can_attend_onsite,
            about_yourself,
            community_engagement_statement,
            understanding_of_swahilipot,
            linkedin_url,
            github_url,
            agree_terms,
            agree_communications
        } = req.body;

        // Create new attachment
        const attachment = new IndustrialAttachment({
            first_name,
            middle_name,
            last_name,
            email,
            phone_number,
            gender,
            date_of_birth: new Date(date_of_birth),
            residential_location,
            institution,
            department,
            course,
            year_of_study,
            expected_graduation_date: new Date(expected_graduation_date),
            available_start_date: available_start_date ? new Date(available_start_date) : undefined,
            can_attend_onsite: can_attend_onsite || false,
            about_yourself,
            community_engagement_statement,
            understanding_of_swahilipot,
            linkedin_url,
            github_url,
            agree_terms: agree_terms === 'true' || agree_terms === true,
            agree_communications: agree_communications === 'true' || agree_communications === true,
            status: 'pending',
            createdBy: req.user?._id
        });

        await attachment.save();

        res.status(201).json({
            success: true,
            data: attachment,
            message: 'Attachment created successfully'
        });
    } catch (error) {
        console.error('Error creating attachment:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating attachment',
            error: error.message
        });
    }
};

// Get all attachments
export const getAttachments = async (req, res) => {
    try {
        const attachments = await IndustrialAttachment.find()
            .populate('institution', 'name')
            .populate('department', 'name')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: attachments.length,
            data: attachments
        });
    } catch (error) {
        console.error('Error fetching attachments:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching attachments',
            error: error.message
        });
    }
};

// Get single attachment
export const getAttachment = async (req, res) => {
    try {
        const attachment = await IndustrialAttachment.findById(req.params.id)
            .populate('institution', 'name')
            .populate('department', 'name');

        if (!attachment) {
            return res.status(404).json({
                success: false,
                message: 'Attachment not found'
            });
        }

        res.status(200).json({
            success: true,
            data: attachment
        });
    } catch (error) {
        console.error('Error fetching attachment:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching attachment',
            error: error.message
        });
    }
};

// Update attachment
export const updateAttachment = async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const allowedUpdates = [
            'studentName',
            'studentEmail',
            'institution',
            'department',
            'startDate',
            'endDate',
            'supervisor',
            'status'
        ];
        
        const isValidOperation = updates.every(update => 
            allowedUpdates.includes(update)
        );

        if (!isValidOperation) {
            return res.status(400).json({
                success: false,
                message: 'Invalid updates!'
            });
        }

        const attachment = await IndustrialAttachment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!attachment) {
            return res.status(404).json({
                success: false,
                message: 'Attachment not found'
            });
        }

        res.status(200).json({
            success: true,
            data: attachment,
            message: 'Attachment updated successfully'
        });
    } catch (error) {
        console.error('Error updating attachment:', error);
        res.status(400).json({
            success: false,
            message: 'Error updating attachment',
            error: error.message
        });
    }
};

// Update attachment status
export const updateAttachmentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status. Must be one of: pending, approved, rejected'
            });
        }

        const attachment = await IndustrialAttachment.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!attachment) {
            return res.status(404).json({
                success: false,
                message: 'Attachment not found'
            });
        }

        res.status(200).json({
            success: true,
            data: attachment,
            message: `Attachment ${status} successfully`
        });
    } catch (error) {
        console.error('Error updating attachment status:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating attachment status',
            error: error.message
        });
    }
};

// Delete attachment
export const deleteAttachment = async (req, res) => {
    try {
        const attachment = await IndustrialAttachment.findByIdAndDelete(req.params.id);

        if (!attachment) {
            return res.status(404).json({
                success: false,
                message: 'Attachment not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Attachment deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting attachment:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting attachment',
            error: error.message
        });
    }
};
