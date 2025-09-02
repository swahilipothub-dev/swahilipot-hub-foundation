import Course from "../models/Course.js";
import LearningInstitution from "../models/LearningInstitution.js";

const enums = Course.schema.path("certification").enumValues;

export const listCourses = async (req, res) => {
  const courses = await Course.find().populate("institution").sort({ createdAt: -1 });
  res.render("courses/index", { courses });
};

export const newCourseForm = async (req, res) => {
  const institutions = await LearningInstitution.find().sort({ name: 1 });
  res.render("courses/new", { enums, institutions, values: {}, errors: {} });
};

export const createCourse = async (req, res) => {
  try {
    const { name, certification, institution } = req.body;
    const course = new Course({ name, certification, institution });
    await course.save();
    res.redirect("/admin/courses");
  } catch (e) {
    const institutions = await LearningInstitution.find().sort({ name: 1 });
    res.status(400).render("courses/new", { enums, institutions, values: req.body, errors: { message: "Invalid input" } });
  }
};

export const showCourse = async (req, res) => {
  const course = await Course.findById(req.params.id).populate("institution");
  if (!course) return res.status(404).render("courses/show", { course: null });
  res.render("courses/show", { course });
};

export const editCourseForm = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.redirect("/admin/courses");
  const institutions = await LearningInstitution.find().sort({ name: 1 });
  res.render("courses/edit", { course, enums, institutions, errors: {} });
};

export const updateCourse = async (req, res) => {
  try {
    const { name, certification, institution } = req.body;
    await Course.findByIdAndUpdate(req.params.id, { name, certification, institution }, { runValidators: true });
    res.redirect("/admin/courses");
  } catch (e) {
    const course = await Course.findById(req.params.id);
    const institutions = await LearningInstitution.find().sort({ name: 1 });
    res.status(400).render("courses/edit", { course: { ...course.toObject(), ...req.body, _id: req.params.id }, enums, institutions, errors: { message: "Invalid input" } });
  }
};

export const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.redirect("/admin/courses");
};