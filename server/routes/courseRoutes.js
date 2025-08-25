import express from "express";
import { listCourses, newCourseForm, createCourse, showCourse, editCourseForm, updateCourse, deleteCourse } from "../controllers/courseController.js";

const router = express.Router();

router.get("/", listCourses);
router.get("/new", newCourseForm);
router.post("/", createCourse);
router.get("/:id", showCourse);
router.get("/:id/edit", editCourseForm);
router.post("/:id", updateCourse);
router.post("/:id/delete", deleteCourse);

export default router;