import mongoose from "mongoose";
import dotenv from "dotenv";
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

const setupAdmin = async () => {
  try {
    await connectDB();

    // Check if admin already exists
    const existingAdmin = await User.findOne({ role: 'admin' });
    
    if (existingAdmin) {
      console.log('✅ Admin user already exists:');
      console.log(`   Email: ${existingAdmin.email}`);
      console.log(`   Name: ${existingAdmin.name}`);
      console.log(`   Role: ${existingAdmin.role}`);
      console.log('\n📝 To reset admin password, use the API endpoint:');
      console.log('   POST /api/auth/create-admin');
    } else {
      // Create default admin user
      const adminUser = new User({
        name: 'Admin User',
        email: 'admin@swahilipot.org',
        password: 'admin123',
        role: 'admin'
      });
      
      await adminUser.save();
      
      console.log('✅ Admin user created successfully!');
      console.log('📧 Login credentials:');
      console.log(`   Email: admin@swahilipot.org`);
      console.log(`   Password: admin123`);
      console.log('\n⚠️  IMPORTANT: Change the default password after first login!');
    }

    console.log('\n🔐 Authentication System Setup Complete!');
    console.log('\n📋 Next steps:');
    console.log('   1. Start the server: npm start');
    console.log('   2. Start the client: cd ../client && npm run dev');
    console.log('   3. Navigate to: http://localhost:8080/login');
    console.log('   4. Login with the admin credentials above');
    console.log('   5. Access admin dashboard at: http://localhost:8080/admin');

    process.exit(0);
  } catch (error) {
    console.error("❌ Error setting up admin:", error);
    process.exit(1);
  }
};

setupAdmin();
