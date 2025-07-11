# Advanced MERN B2B Teams Project Management SaaS - Efficio-Backend

## ✨ Project Overview

This project is a robust B2B Teams Project Management SaaS application built with the MERN stack. It provides advanced features for managing workspaces, projects, tasks, and team members, tailored for business-to-business collaboration. The backend is designed with scalability, security, and extensibility in mind, supporting modern authentication, role-based access control, and RESTful APIs.

---

## 📦 Tech Stack

- **Node.js** & **Express.js** – Backend server and REST API
- **TypeScript** – Type safety and modern JavaScript features
- **MongoDB** & **Mongoose** – NoSQL database and ODM
- **Passport.js** – Authentication (including OAuth providers)
- **JWT** – Secure token-based authentication
- **Bcrypt** – Password hashing
- **Other**: dotenv, custom middlewares, and more

---

## 📁 Folder Structure

```
backend/
├── package.json
├── tsconfig.json
└── src/
    ├── @types/                # Custom TypeScript type definitions
    ├── config/                # App, DB, HTTP, and Passport configurations
    ├── controllers/           # Route controllers (auth, user, project, etc.)
    ├── enums/                 # Enum definitions
    ├── middlewares/           # Express middlewares (auth, error handling, etc.)
    ├── models/                # Mongoose models
    ├── routes/                # API route definitions
    ├── seeders/               # Database seed scripts
    ├── services/              # Business logic and service layer
    ├── utils/                 # Utility functions (JWT, bcrypt, etc.)
    ├── validation/            # Request validation schemas
    └── index.ts               # App entry point
```

---

## ⚙️ Installation and Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo/Efficio-backend
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## 🚀 How to Run the Project

### Running the Backend

```bash
cd backend
npm run dev
```

The backend server will start on the port specified in your environment variables (default: `5000`).

### Running the Frontend

```bash
cd client
npm run dev
```

The frontend will start on the port specified in the frontend configuration (default: `5173`).

---

## 🔐 Required Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

| Variable Name          | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `PORT`                 | Port number for the backend server (e.g., 5000) |
| `MONGODB_URI`          | MongoDB connection string                       |
| `JWT_SECRET`           | Secret key for JWT signing                      |
| `JWT_EXPIRES_IN`       | JWT token expiration time (e.g., 1d, 7d)        |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID (if using Google login)  |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret                      |
| `CLIENT_URL`           | URL of the frontend app (for CORS, redirects)   |

> **Note:** Add any other environment variables as required by your configuration.

---

## 🔧 Features and Functionality

- User authentication (JWT, Google OAuth)
- Role-based access control (Admin, Member, etc.)
- Workspace and project management
- Task assignment and tracking
- Member invitation and management
- RESTful API structure
- Error handling and validation
- Secure password storage (bcrypt)
- Modular and scalable codebase

---
