import mongoose from "mongoose";

const certifications = ["Certificate", "Diploma", "Degree", "Others"];
const genders = ["Male", "Female"];
const yearsOfStudy = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"];
const institutionTypes = ["University", "TVET", "College", "High School", "Other"];

const industrialAttachmentStudentSchema = new mongoose.Schema(
  {
    swahilipot_id: { type: String, unique: true, sparse: true },
    first_name: { type: String, required: true, trim: true },
    middle_name: { type: String, trim: true },
    last_name: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    gender: { type: String, enum: genders, required: true },
    is_student: { type: Boolean, required: true },
    institution_type: { type: String, enum: institutionTypes },
    institution_name: { type: String, trim: true },
    certification_type: { type: String, enum: certifications },
    course_name: { type: String, trim: true },
    year_of_study: { type: String, enum: yearsOfStudy },
    expected_graduation_year: { type: Number },
    what_makes_you_stand_out: { type: String, required: true },
    resume_url: { type: String, trim: true },
    school_letter_url: { type: String, trim: true },
    accepted: { type: Boolean, default: false },
    email_sent: { type: Boolean, default: false },
    department_program_assigned: { type: String, trim: true }
  },
  { timestamps: true }
);

industrialAttachmentStudentSchema.index({ email: 1 }, { unique: true });
industrialAttachmentStudentSchema.index({ swahilipot_id: 1 }, { unique: true, sparse: true });

const IndustrialAttachmentStudent = mongoose.model("IndustrialAttachmentStudent", industrialAttachmentStudentSchema);

export default IndustrialAttachmentStudent;