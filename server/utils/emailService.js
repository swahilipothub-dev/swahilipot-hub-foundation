import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create a test account (for development only)
const createTestAccount = async () => {
  if (process.env.NODE_ENV === 'development') {
    return await nodemailer.createTestAccount();
  }
  return null;
};

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || '', // generated ethereal user
    pass: process.env.SMTP_PASS || '', // generated ethereal password
  },
});

/**
 * Send an email
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} text - Plain text email body
 * @param {string} html - HTML email body (optional)
 * @returns {Promise<Object>} - Result of the send operation
 */
export const sendEmail = async (to, subject, text, html = '') => {
  try {
    // Setup email data with unicode symbols
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME || 'Swahilipot Hub'}" <${process.env.EMAIL_FROM || 'noreply@swahilipot.dev'}>`,
      to,
      subject,
      text,
      html: html || text.replace(/\n/g, '<br>'), // Convert newlines to <br> if no HTML provided
    };

    // Send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);

    if (process.env.NODE_ENV === 'development') {
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

// Initialize test account in development
if (process.env.NODE_ENV === 'development') {
  createTestAccount().then(testAccount => {
    if (testAccount) {
      console.log('Ethereal test account created:');
      console.log(`Email: ${testAccount.user}`);
      console.log(`Password: ${testAccount.pass}`);
      console.log(`Web URL: https://ethereal.email/login`);
    }
  });
}

export default {
  sendEmail,
};
