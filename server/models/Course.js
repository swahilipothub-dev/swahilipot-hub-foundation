import mongoose from "mongoose";

const certifications = ["Certificate", "Diploma", "Degree", "Others"];

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    certification: { type: String, enum: certifications, required: true },
    institution: { type: mongoose.Schema.Types.ObjectId, ref: "LearningInstitution", required: true },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;