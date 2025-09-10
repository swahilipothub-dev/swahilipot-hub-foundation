import mongoose from "mongoose";
import dotenv from "dotenv";
import LearningInstitution from "./models/LearningInstitution.js";
import Course from "./models/Course.js";
import Department from "./models/Department.js";
import User from "./models/Users.js";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await LearningInstitution.deleteMany({});
    await Course.deleteMany({});
    await Department.deleteMany({});
    // Don't clear users to preserve admin accounts

    // Create departments
    const departments = await Department.insertMany([
      { name: "Computer Science", description: "Computer Science and Information Technology" },
      { name: "Engineering", description: "Various Engineering disciplines" },
      { name: "Business", description: "Business Administration and Management" },
      { name: "Arts", description: "Creative Arts and Design" },
      { name: "Health Sciences", description: "Medical and Health related courses" }
    ]);

    // Create institutions
    const institutions = await LearningInstitution.insertMany([
      { name: "University of Nairobi", county: "Nairobi" },
      { name: "Jomo Kenyatta University", county: "Kiambu" },
      { name: "Kenyatta University", county: "Nairobi" },
      { name: "Technical University of Kenya", county: "Nairobi" },
      { name: "Moi University", county: "Uasin Gishu" },
      { name: "Egerton University", county: "Nakuru" }
    ]);

    // Create courses
    const courses = await Course.insertMany([
      { name: "Bachelor of Science in Computer Science", certification: "Degree", institution: institutions[0]._id },
      { name: "Bachelor of Science in Information Technology", certification: "Degree", institution: institutions[0]._id },
      { name: "Bachelor of Engineering in Civil Engineering", certification: "Degree", institution: institutions[1]._id },
      { name: "Bachelor of Engineering in Electrical Engineering", certification: "Degree", institution: institutions[1]._id },
      { name: "Bachelor of Commerce", certification: "Degree", institution: institutions[2]._id },
      { name: "Bachelor of Business Administration", certification: "Degree", institution: institutions[2]._id },
      { name: "Diploma in Computer Science", certification: "Diploma", institution: institutions[3]._id },
      { name: "Certificate in Web Development", certification: "Certificate", institution: institutions[3]._id }
    ]);

    // Create admin user if it doesn't exist
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (!existingAdmin) {
      const adminUser = new User({
        name: 'Admin User',
        email: 'admin@swahilipot.org',
        password: 'admin123',
        role: 'admin'
      });
      await adminUser.save();
      console.log('Admin user created: admin@swahilipot.org / admin123');
    } else {
      console.log('Admin user already exists');
    }

    console.log("Data seeded successfully!");
    console.log(`Created ${departments.length} departments`);
    console.log(`Created ${institutions.length} institutions`);
    console.log(`Created ${courses.length} courses`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
