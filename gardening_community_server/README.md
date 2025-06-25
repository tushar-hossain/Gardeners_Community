# 🌿 A Gardening Community & Resource Hub Server

## Description

This is the backend for the Gardening Community & Resource Hub platform. It handles user gardener profiles, tip sharing, and secure API routes. The backend is built using Express and connects to a MongoDB database to store all dynamic content and user-generated tips.

## 🚀 Live API Base URL: https://gardening-community-server-gamma.vercel.app/

## Features

- **Gardeners API** – CRUD operations for gardener profiles with filtering for active users.
- **Tips API** – Handles gardening tip creation, trending tip queries, and category filters.
- **Authentication Middleware** – Secures protected routes using Firebase Auth.
- **MongoDB Integration** – Stores data in structured collections: `gardeners`, `tips`, `users`.
- **CORS & JSON Middleware** – Fully configured for frontend communication.

## API Routes Overview

### Gardeners

- `GET /api/gardeners` – Get all gardener profiles
- `GET /api/gardeners/active` – Get 6 active gardeners
- `POST /api/gardeners` – Add a new gardener

### Tips

- `GET /api/tips` – Get all tips
- `GET /api/tips/trending` – Get top 6 tips
- `POST /api/tips` – Share a new tip (protected)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- dotenv for env configuration
- CORS
