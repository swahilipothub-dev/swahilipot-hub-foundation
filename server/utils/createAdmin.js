// utils/createAdmin.js
import User from "../models/Users.js";

const createDefaultAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: "dev@swahilipothub.co.ke" });

    if (!existingAdmin) {
      const admin = new User({
        name: "Default Admin",
        email: "dev@swahilipothub.co.ke",
        password: "123", // will be hashed by pre('save')
        role: "admin",
        isActive: true,
      });

      await admin.save();
      console.log("✅ Default admin user created: dev@swahilipothub.co.ke / 123");
    } else {
      console.log("ℹ️ Default admin user already exists.");
    }
  } catch (err) {
    console.error("❌ Error creating default admin:", err.message);
  }
};

export default createDefaultAdmin;