import express from 'express';
import * as authController from '../controllers/authController.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/create-admin', authController.createAdmin); // For initial setup

// Protected routes
router.get('/me', requireAuth, authController.getCurrentUser);

export default router;
