import mongoose from 'mongoose';
import User from '../models/Users.js';
import { sendEmail } from '../utils/emailService.js';
import crypto from 'crypto';

// Get all users with pagination and filtering
export const getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', role = '', status = '' } = req.query;
    const query = {};

    // Build query
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (role) query.role = role;
    if (status !== '') query.isActive = status === 'true';

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { createdAt: -1 },
      select: '-password -__v'
    };

    const users = await User.paginate(query, options);
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users', details: error.message });
  }
};

// Get single user by ID
export const getUser = async (req, res) => {
  try {
    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid user ID format' });
    }

    const user = await User.findById(req.params.id).select('-password -__v');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user', details: error.message });
  }
};

// Create new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role = 'user', isActive = true } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create user
    const user = new User({
      name,
      email,
      password,
      role,
      isActive
    });

    await user.save();

    // Send welcome email with credentials
    try {
      await sendWelcomeEmail(user.email, user.name, password);
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Continue even if email fails
    }

    // Return user without password
    const userResponse = user.toObject();
    delete userResponse.password;
    
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: userResponse
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ error: 'Failed to create user', details: error.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const { name, role, isActive } = req.body;
    const updates = { name, role, isActive };

    // Only update fields that are provided
    Object.keys(updates).forEach(key => updates[key] === undefined && delete updates[key]);

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-password -__v');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      message: 'User updated successfully',
      user
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(400).json({ error: 'Failed to update user', details: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user', details: error.message });
  }
};

// Reset password
export const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
    
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    // Send password reset email
    const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;
    
    try {
      await sendPasswordResetEmail(user.email, resetUrl);
      res.json({ success: true, message: 'Password reset email sent' });
    } catch (emailError) {
      console.error('Failed to send password reset email:', emailError);
      throw new Error('Failed to send password reset email');
    }
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ error: 'Failed to reset password', details: error.message });
  }
};

// Helper function to send welcome email
async function sendWelcomeEmail(email, name, password) {
  const subject = 'Welcome to Swahilipot Hub';
  const text = `Hello ${name},\n\n` +
    'Your account has been created successfully.\n' +
    `Email: ${email}\n` +
    `Password: ${password}\n\n` +
    'Please change your password after logging in.\n\n' +
    'Best regards,\nSwahilipot Hub Team';

  await sendEmail(email, subject, text);
}

// Helper function to send password reset email
async function sendPasswordResetEmail(email, resetUrl) {
  const subject = 'Password Reset Request';
  const text = `You are receiving this email because you (or someone else) has requested a password reset.\n\n` +
    `Please click on the following link to reset your password:\n${resetUrl}\n\n` +
    'This link will expire in 10 minutes.\n\n' +
    'If you did not request this, please ignore this email.\n\n' +
    'Best regards,\nSwahilipot Hub Team';

  await sendEmail(email, subject, text);
}
