import mongoose from "mongoose";

const genders = ["Male", "Female", "Other", "Prefer not to say"];
const employmentTypes = ["Full-time", "Part-time", "Casual", "Internship", "Self-employed", "Gig/Freelance", "Unemployed", "Other"];
const subcountiesMombasa = ["Kisauni", "Nyali", "Changamwe", "Jomvu", "Likoni", "Mvita"];
const wardsKisauni = ["Bamburi", "Junda", "Mjambere", "Mtopanga", "Shanzu"];
const wardsNyali = ["Frere Town", "Kadzandani", "Kongowea", "Mkomani", "Ziwa la Ng'ombe"];
const wardsChangamwe = ["Airport", "Changamwe", "Chaani", "Kipevu", "Port Reitz"];
const wardsJomvu = ["Jomvu Kuu", "Mikindani", "Miritini"];
const wardsLikoni = ["Bofu", "Likoni", "Mtongwe", "Shika Adabu", "Timbwani"];
const wardsMvita = ["Majengo", "Old Town", "Shimanzi/Ganjoni", "Tononoka", "Tudor"];
const institutionTypes = ["University", "TVET", "College", "Secondary", "Primary", "Other"];
const certifications = ["Certificate", "Diploma", "Degree", "Postgraduate", "Short Course", "Other"];
const counties = [
  "Mombasa","Kwale","Kilifi","Tana River","Lamu","Taita-Taveta","Garissa","Wajir","Mandera","Marsabit","Isiolo","Meru","Tharaka-Nithi","Embu","Kitui","Machakos","Makueni","Nyandarua","Nyeri","Kirinyaga","Murang'a","Kiambu","Turkana","West Pokot","Samburu","Trans-Nzoia","Uasin Gishu","Elgeyo-Marakwet","Nandi","Baringo","Laikipia","Nakuru","Narok","Kajiado","Kericho","Bomet","Kakamega","Vihiga","Bungoma","Busia","Siaya","Kisumu","Homa Bay","Migori","Kisii","Nyamira","Nairobi"
];

const opportunityYouthSchema = new mongoose.Schema(
  {
    record_id: { type: String, index: true, unique: true, sparse: true },
    training_course_taken: { type: String, trim: true },
    full_names: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true, unique: true },
    email: { type: String, trim: true, lowercase: true, unique: true, sparse: true },
    id_number: { type: String, trim: true, unique: true, sparse: true },
    gender: { type: String, enum: genders },
    relationship_owner: { type: String, trim: true },
    data_training: { type: Boolean, default: false },
    year_of_birth: { type: Number },
    current_age: { type: Number },
    home_based_care_training: { type: Boolean, default: false },
    has_disability: { type: Boolean, default: false },
    disability_type: { type: String, trim: true },
    county_of_origin: { type: String, enum: counties },
    subcounty_mombasa: { type: String, enum: subcountiesMombasa },
    ward_kisauni: { type: String, enum: wardsKisauni },
    ward_nyali: { type: String, enum: wardsNyali },
    ward_changamwe: { type: String, enum: wardsChangamwe },
    ward_jomvu: { type: String, enum: wardsJomvu },
    ward_likoni: { type: String, enum: wardsLikoni },
    ward_mvita: { type: String, enum: wardsMvita },
    currently_in_school: { type: Boolean, default: false },
    vocational_training_last_year: { type: Boolean, default: false },
    course_enabled_job: { type: Boolean, default: false },
    currently_employed: { type: Boolean, default: false },
    employment_type: { type: String, enum: employmentTypes },
    monthly_salary: { type: Number, min: 0 },
    running_business: { type: Boolean, default: false },
    business_operation_duration_months: { type: Number, min: 0 },
    business_monthly_income: { type: Number, min: 0 },
    areas_of_interest: { type: [String], default: [] },
    completed_primary: { type: Boolean, default: false },
    completed_secondary: { type: Boolean, default: false },
    completed_tertiary: { type: Boolean, default: false },
    tertiary_course_taken: { type: String, trim: true },
    consent_dpa_2019: { type: Boolean, required: true },
    last_modified_by: { type: String, trim: true },
    is_blacklisted: { type: Boolean, default: false },
    training_name: { type: String, trim: true },
    name_from_training: { type: String, trim: true },
    hti_dressmaking_tailoring: { type: Boolean, default: false },
    airbnb_training: { type: Boolean, default: false },
    updated_at_external: { type: Date },
    created_at_external: { type: Date },
    activity_events: { type: [String], default: [] },
    activity_count: { type: Number, default: 0 },
    improved: { type: Boolean, default: false },
    placement: { type: String, trim: true },
    placement_2: { type: String, trim: true },
    select_value: { type: String, trim: true },
    case_manager: { type: String, trim: true },
    youth_hub_network: { type: String, trim: true },
    youth_advisory_group: { type: String, trim: true },
    areas_of_interest_goyn: { type: [String], default: [] },
    employer: { type: String, trim: true },
    training_and_placement_partner: { type: String, trim: true },
    is_student: { type: Boolean, default: false },
    institution_type: { type: String, enum: institutionTypes },
    institution_name: { type: String, trim: true },
    certification_type: { type: String, enum: certifications },
    course_name: { type: String, trim: true }
  },
  { timestamps: true }
);

opportunityYouthSchema.index({ full_names: "text", training_course_taken: "text", institution_name: "text", employer: "text", areas_of_interest: "text" });

const OpportunityYouth = mongoose.model("OpportunityYouth", opportunityYouthSchema);

export default OpportunityYouth;