# 🧳 Travel App Backend

A full-featured backend for a travel application built using Node.js, Express, and MongoDB. It includes authentication, wishlist functionality, and RESTful APIs.

---

## 🚀 Features

* 🔐 JWT Authentication (Login / Signup / Logout)
* 🍪 Cookie-based session handling
* 🏨 Hotel APIs (Get all, Get single)
* ❤️ Wishlist functionality (Add / Remove / Fetch)
* 🛡️ Protected routes using middleware
* 🔄 MongoDB relationships using `ref` and `populate`
* ❌ Global 404 error handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (jsonwebtoken)
* Cookie Parser

---

## 📂 Project Structure

```
controllers/
models/
routes/
middlewares/
server.js
```

---

## 🔐 Authentication Flow

* User signs up → account created
* User logs in → JWT token stored in HTTP-only cookie
* Middleware verifies token for protected routes
* Logout clears cookie

---

## 📌 API Endpoints

### Auth

* `POST /api/signup`
* `POST /api/login`
* `POST /api/logout`

### Hotels

* `GET /api/hotels`
* `GET /api/hotels/:id`

### Wishlist

* `GET /api/wishlist`
* `POST /api/wishlist/:hotelId`
* `DELETE /api/wishlist/:hotelId`

---

## ⚙️ Setup Instructions

1. Clone the repo

```
git clone <your-repo-link>
```

2. Install dependencies

```
npm install
```

3. Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
```

4. Run the server

```
npm run dev
```

---

## 🌐 Deployment

* Backend can be deployed on Render / Railway
* Ensure environment variables are set in deployment

---

## 🧠 Key Learnings

* Middleware design and request lifecycle
* JWT authentication and cookies
* MongoDB relationships and population
* REST API design

---

## ✨ Future Improvements

* Email verification (OTP)
* Google OAuth login
* Pagination for hotels
* Rate limiting & security improvements

---

## 👨‍💻 Author

Built by [Your Name]

---
