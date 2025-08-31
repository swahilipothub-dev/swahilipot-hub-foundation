# Industrial Attachment System Setup

This guide will help you set up the Industrial Attachment application system with both frontend and backend components.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB database
- npm or yarn package manager

## Backend Setup

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Environment Configuration

Create a `.env` file in the server directory:

```env
MONGO_URI=mongodb://localhost:27017/swahilipot_hub
PORT=5000
```

### 3. Database Setup

Make sure MongoDB is running and accessible. The system will automatically connect to the database when you start the server.

### 4. Seed the Database

Populate the database with sample data:

```bash
npm run seed
```

This will create:
- Sample learning institutions
- Sample courses
- Sample departments

### 5. Start the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will run on port 5000 by default.

## Frontend Setup

### 1. Install Dependencies

```bash
cd client
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

The frontend will run on port 5173 by default.

## API Endpoints

### Industrial Attachment Endpoints

- `POST /api/users/industrial-attachments` - Submit application
- `GET /api/users/institutions` - Get available institutions
- `GET /api/users/courses` - Get available courses
- `GET /api/users/departments` - Get available departments

### User Management Endpoints

- `GET /api/users` - Get all users
- `POST /api/users` - Create new user

### Admin Endpoints

- Various admin routes under `/api/admin/*`

## Database Models

### IndustrialAttachment
- Personal information (name, email, phone, etc.)
- Academic information (institution, course, department)
- Documents (resume, cover letter URLs)
- Personal statements
- Professional links (LinkedIn, GitHub)

### LearningInstitution
- Institution name
- County location

### Course
- Course name
- Certification level
- Associated institution

### Department
- Department name
- Description

## Features

- **Dynamic Dropdowns**: Institutions, courses, and departments are fetched from the database
- **Form Validation**: Client-side and server-side validation
- **Reference ID Generation**: Unique reference ID for each application
- **Duplicate Prevention**: Email-based duplicate application checking
- **Responsive Design**: Mobile-friendly form interface

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure the frontend URL is included in the CORS configuration
2. **Database Connection**: Check MongoDB connection string and ensure the service is running
3. **Port Conflicts**: Change the PORT in .env if port 5000 is already in use

### Database Connection Issues

- Verify MongoDB is running
- Check the connection string in .env
- Ensure network access to the database

### Frontend Connection Issues

- Verify the backend server is running
- Check the API endpoint URLs
- Ensure CORS is properly configured

## Development Notes

- The system uses ES6 modules (type: "module" in package.json)
- MongoDB with Mongoose for data persistence
- Express.js for the REST API
- React with TypeScript for the frontend
- Tailwind CSS for styling
