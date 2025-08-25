
# Swahilipot Hub Foundation Server

## Setup

- Clone the repository
- Run `npm install` in the server directory
- Create a `.env` file with your MongoDB URI and other secrets
- Start the server with `npm start`

## Admin Dashboard API

New endpoints for managing IndustrialAttachment, Department, LearningInstitution, Course, and Users:

- `GET /api/admin/attachments` (CRUD for attachments)
- `GET /api/admin/departments` (CRUD for departments)
- `GET /api/admin/institutions` (CRUD for institutions)
- `GET /api/admin/courses` (CRUD for courses)
- `GET /api/admin/users` (CRUD for users)
- `GET /api/admin/analytics` (basic analytics)
- `GET /api/admin/export/:model` (CSV export)

### CSV Export Dependency

The admin dashboard uses the `json2csv` npm package for CSV export. Install it in the server directory:

```bash
npm install json2csv
```


