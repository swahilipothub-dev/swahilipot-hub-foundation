
# Swahilipot Hub Foundation Server

## Setup

- Clone the repository
- Run `npm install` in the server directory
- Create a `.env` file with your MongoDB URI and other secrets
- Run `npm run setup` to create initial admin user
- Start the server with `npm start`

## Authentication System

The admin dashboard is now protected with JWT-based authentication.

### Initial Setup

1. **Create Admin User:**
   ```bash
   npm run setup
   ```
   This creates a default admin user:
   - Email: `admin@swahilipot.org`
   - Password: `admin123`

2. **Login:**
   - Navigate to `http://localhost:8080/login`
   - Use the admin credentials above
   - You'll be redirected to the admin dashboard

### Authentication Endpoints

- `POST /api/auth/login` - Login with email and password
- `POST /api/auth/register` - Register new user
- `POST /api/auth/logout` - Logout (client-side token removal)
- `GET /api/auth/me` - Get current user info (protected)
- `POST /api/auth/create-admin` - Create admin user (for setup)

### Security Features

- **JWT Tokens:** 24-hour expiration
- **Password Hashing:** bcrypt with salt rounds
- **Role-based Access:** Admin and user roles
- **Protected Routes:** All admin endpoints require authentication
- **Token Validation:** Automatic token verification on protected routes

## Admin Dashboard API

Protected endpoints for managing IndustrialAttachment, Department, LearningInstitution, Course, and Users:

- `GET /api/admin/attachments` (CRUD for attachments)
- `GET /api/admin/departments` (CRUD for departments)
- `GET /api/admin/institutions` (CRUD for institutions)
- `GET /api/admin/courses` (CRUD for courses)
- `GET /api/admin/users` (CRUD for users)
- `GET /api/admin/analytics` (basic analytics)
- `GET /api/admin/export/:model` (CSV export)

**Note:** All admin endpoints require a valid JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

### CSV Export Dependency

The admin dashboard uses the `json2csv` npm package for CSV export. Install it in the server directory:

```bash
npm install json2csv
```


