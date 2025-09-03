# Swahilipot Main Site

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Industrial Attachment Management System for Swahilipot Hub Foundation

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 8.x or later
- MongoDB 6.0 or later

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/swahilipothub/swahilipot-hub-foundation.git
   cd swahilipot-hub-foundation
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install


3. **Environment Setup**
   - Copy `.env.example` to `.env` in the root directory
   - Update the environment variables as needed
   ```bash
   cp .env.example .env
   ```

### Running the Application

#### Development Mode

1. **Start the backend server**
   ```bash
   npm run dev:server
   ```

2. **In a new terminal, start the frontend**
   ```bash
   npm run dev:client
   ```

3. Access the application at `http://localhost:8080`

#### Production Mode

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   cd ..
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

3. Access the application at `http://localhost:5000`

## 📂 Project Structure

```
swahilipot-hub-foundation/
├── client/                 # React frontend
├── server/                 # Node.js/Express backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Database models
│   ├── public/            # Static files
│   ├── routes/            # API routes
│   └── views/             # EJS templates
├── .env.example          # Environment variables example
└── README.md             # This file
```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/swahilipot_hub


## 🛠 Available Scripts

- `npm run dev` - Start both client and server in development mode
- `npm run dev:client` - Start only the React development server
- `npm run dev:server` - Start only the Node.js development server
- `npm run build` - Build the React app for production
- `npm start` - Start the production server
- `npm test` - Run tests

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Swahilipot Hub Foundation Team
- All Contributors
