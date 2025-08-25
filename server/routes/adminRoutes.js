// Admin dashboard routes for managing models
import express from 'express';
import * as adminController from '../controllers/adminController.js';
const router = express.Router();

// CRUD routes for each model
router.get('/attachments', adminController.getAttachments);
router.post('/attachments', adminController.createAttachment);
router.put('/attachments/:id', adminController.updateAttachment);
router.delete('/attachments/:id', adminController.deleteAttachment);
router.put('/attachments/:id/accept', adminController.toggleAcceptance);
router.put('/attachments/:id/archive', adminController.toggleArchive);

router.get('/departments', adminController.getDepartments);
router.post('/departments', adminController.createDepartment);
router.put('/departments/:id', adminController.updateDepartment);
router.delete('/departments/:id', adminController.deleteDepartment);

router.get('/institutions', adminController.getInstitutions);
router.post('/institutions', adminController.createInstitution);
router.put('/institutions/:id', adminController.updateInstitution);
router.delete('/institutions/:id', adminController.deleteInstitution);

router.get('/courses', adminController.getCourses);
router.post('/courses', adminController.createCourse);
router.put('/courses/:id', adminController.updateCourse);
router.delete('/courses/:id', adminController.deleteCourse);

router.get('/users', adminController.getUsers);
router.post('/users', adminController.createUser);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

// Analytics and CSV export
router.get('/analytics', adminController.getAnalytics);
router.get('/export/:model', adminController.exportCSV);

export default router;
