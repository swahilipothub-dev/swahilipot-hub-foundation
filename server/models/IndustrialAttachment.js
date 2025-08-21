import mongoose from "mongoose";

const genders = ["Male", "Female"];
const yearsOfStudy = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"];

const industrialAttachmentSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true, trim: true },
    middle_name: { type: String, trim: true },
    last_name: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    institution: { type: mongoose.Schema.Types.ObjectId, ref: "LearningInstitution", required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    residential_location: { type: String, required: true, trim: true },
    date_of_birth: { type: Date, required: true },
    resume_url: { type: String, trim: true },
    cover_letter_url: { type: String, trim: true },
    gender: { type: String, enum: genders, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
    year_of_study: { type: String, enum: yearsOfStudy, required: true },
    expected_graduation_date: { type: Date, required: true },
    available_start_date: { type: Date },
    can_attend_onsite: { type: Boolean, default: true },
    agree_terms: { type: Boolean, required: true },
    agree_communications: { type: Boolean, default: false },
    is_accepted: { type: Boolean, default: false },
    is_archived: { type: Boolean, default: false },
    about_yourself: { type: String, required: true },
    community_engagement_statement: { type: String, required: true },
    understanding_of_swahilipot: { type: String, required: true },
    linkedin_url: { type: String, trim: true },
    github_url: { type: String, trim: true },
  },
  { timestamps: true }
);

industrialAttachmentSchema.index({ email: 1 }, { unique: true });

const IndustrialAttachment = mongoose.model("IndustrialAttachment", industrialAttachmentSchema);

export default IndustrialAttachment;