# 🌱 Gardening Community - Server Side

A robust backend server for the Gardening Community web application built using **Node.js**, **Express**, and **MongoDB**. This backend powers user authentication, event management, gardener profiles, registration system, admin functionalities, and more.

## 🚀 Live API Base URL: https://gardening-community-server-gamma.vercel.app/



## 🚀 Features

- ✅ RESTful API with Express.js
- 🔐 JWT-based authentication with Firebase
- 🗂️ MongoDB database (native driver)
- 👤 User roles: admin, gardener, general user
- 🪴 Gardener profile creation and viewing
- 📅 Event listing and details fetching
- 📝 Event registration endpoint
- 📬 Contact endpoints and form data handling
- 🧑‍🌾 Admin-level access and moderation (protected routes)
- 📊 Basic stats or analytics endpoint

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (native driver)
- **Firebase Admin SDK** (for auth token verification)
- **dotenv** (for environment configuration)
- **Helmet, CORS, Morgan** (security and logging middleware)

---

## 🔐 Authentication

Uses Firebase Admin SDK to verify JWT from frontend.

### Middleware

- `verifyToken` – Verifies Firebase token.
- `verifyAdmin` – Ensures the user is an admin.

---

## 📚 API Endpoints

### 🔐 Auth & Users

- `POST /jwt` — Get custom JWT
- `GET /users` — Get all users (admin only)
- `GET /users/:email` — Get user by email
- `PATCH /users/admin/:id` — Promote user to admin

### 🧑‍🌾 Gardeners

- `GET /gardeners` — Get all gardeners
- `GET /gardeners/:id` — Get gardener details

### 📅 Events

- `GET /events` — List all events
- `GET /events/:id` — Get event details

### Tips

- `GET /tips` – Get all tips
- `GET /tips/trending` – Get top 6 tips
- `POST /tips` – Share a new tip (protected)

### 📝 Registrations

- `POST /register` — Register a user to an event

---

## 📦 Environment Variables

Create a `.env` file in the root of your backend and include the following:

```
PORT=3000
DB_USER=yourMongoUser
DB_PASS=yourMongoPassword
DB_NAME=gardeningDb
JWT_SECRET=yourJWTSecret

FIREBASE_TYPE=service-account-type
FIREBASE_PROJECT_ID=project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-service-email
```

---

## ▶️ Run Locally

```bash
git clone https://github.com/tushar-hossain/Gardeners_Community.git
cd gardening-hub-server
npm install
npm run start   # or: nodemon index.js
```

---

## 🔐 Security

- Role-based access control
- Input validation and sanitization
- Helmet for HTTP header protection
- CORS for secure cross-origin access

---

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first.

---

## ✉️ Contact

Email: tusharsu97@gmail.com
GitHub: [@tushar-hossain](https://github.com/tushar-hossain)
