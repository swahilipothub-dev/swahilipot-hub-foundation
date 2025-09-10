import mongoose from 'mongoose';
import dotenv from 'dotenv';
import IndustrialAttachment from '../models/IndustrialAttachment.js';

dotenv.config();

async function checkAttachments() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Get all attachments
    const attachments = await IndustrialAttachment.find({})
      .populate('institution', 'name')
      .populate('department', 'name')
      .populate('course', 'name');

    console.log(`Found ${attachments.length} attachments:`);
    console.log(JSON.stringify(attachments, null, 2));

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkAttachments();
