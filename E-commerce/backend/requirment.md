# E-Commerce Website - Backend Requirements 📋

> **Last Updated:** December 23, 2025  
> **Status:** ✅ In Development  
> **Version:** 1.0.0

---

## 📌 Project Overview

An e-commerce backend API built with **Node.js/Express** featuring user authentication, product management, and password recovery functionality.

---

## 🏗️ Architecture Overview

```
backend/
├── server.js                 # Express server entry point
├── package.json              # Dependencies & scripts
├── config/
│   └── db.js                # Database configuration
├── models/
│   ├── User.js              # User model
│   └── Product.js           # Product model
├── controllers/
│   ├── AuthController.js    # Auth logic
│   └── ProductController.js # Product logic
└── routes/
    ├── Auth.js              # Auth routes
    └── Product.js           # Product routes
```

---

## 🔐 Authentication Module

### Overview
- User registration (Sign Up)
- User login with JWT tokens
- Password recovery (Forgot Password)

### Routes

#### 1️⃣ **Sign Up** (POST)
```
POST /api/auth/signup

REQUEST BODY:
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}

RESPONSE (201 Created):
{
  "message": "User created successfully",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}

VALIDATION:
- ✅ Email required
- ✅ Password required
- ✅ Name required
- ✅ Check duplicate email
- ✅ Hash password before storing
```

#### 2️⃣ **Login** (POST)
```
POST /api/auth/login

REQUEST BODY:
{
  "email": "user@example.com",
  "password": "password123"
}

RESPONSE (200 OK):
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}

VALIDATION:
- ✅ Email required
- ✅ Password required
- ✅ Verify email exists
- ✅ Compare hashed password
- ✅ Generate JWT token (7 days expiry)
```

#### 3️⃣ **Forgot Password** (PATCH)
```
PATCH /api/auth/forgot-password

REQUEST BODY:
{
  "email": "user@example.com"
}

RESPONSE (200 OK):
{
  "message": "Password reset email sent",
  "email": "user@example.com"
}

VALIDATION:
- ✅ Email required
- ✅ Verify user exists
- ✅ Generate reset token
- ✅ Send reset email (to be implemented)
```

---

## 🛍️ Product Module

### Overview
- View all products
- View single product details
- Create new products (Admin)
- Update product information (Admin)
- Delete products (Admin)

### Routes

#### 1️⃣ **Get All Products** (GET)
```
GET /api/products

RESPONSE (200 OK):
{
  "message": "Products fetched",
  "data": [
    {
      "id": 1,
      "name": "Laptop",
      "description": "Gaming Laptop",
      "price": 999.99,
      "category": "Electronics",
      "image": "laptop.jpg",
      "stock": 10,
      "createdAt": "2025-12-23T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Mouse",
      "description": "Wireless Mouse",
      "price": 29.99,
      "category": "Accessories",
      "image": "mouse.jpg",
      "stock": 50,
      "createdAt": "2025-12-23T10:00:00Z"
    }
  ]
}
```

#### 2️⃣ **Get Product by ID** (GET)
```
GET /api/products/:id

EXAMPLE: GET /api/products/1

RESPONSE (200 OK):
{
  "message": "Product fetched",
  "data": {
    "id": 1,
    "name": "Laptop",
    "description": "Gaming Laptop",
    "price": 999.99,
    "category": "Electronics",
    "image": "laptop.jpg",
    "stock": 10,
    "createdAt": "2025-12-23T10:00:00Z"
  }
}

ERROR (404 Not Found):
{
  "message": "Product not found"
}
```

#### 3️⃣ **Create Product** (POST) 🔒 *Admin Only*
```
POST /api/products

REQUEST BODY:
{
  "name": "Keyboard",
  "description": "Mechanical Keyboard",
  "price": 79.99,
  "category": "Accessories",
  "image": "keyboard.jpg",
  "stock": 30
}

RESPONSE (201 Created):
{
  "message": "Product created successfully",
  "data": {
    "id": 3,
    "name": "Keyboard",
    "description": "Mechanical Keyboard",
    "price": 79.99,
    "category": "Accessories",
    "image": "keyboard.jpg",
    "stock": 30
  }
}

VALIDATION:
- ✅ Name required
- ✅ Description required
- ✅ Price required
- ✅ Category required
- ✅ Image optional (default: 'default.jpg')
- ✅ Stock optional (default: 0)
```

#### 4️⃣ **Update Product** (PUT) 🔒 *Admin Only*
```
PUT /api/products/:id

EXAMPLE: PUT /api/products/1

REQUEST BODY:
{
  "name": "Gaming Laptop Pro",
  "price": 1299.99,
  "stock": 15
}

RESPONSE (200 OK):
{
  "message": "Product updated successfully",
  "data": {
    "id": 1,
    "name": "Gaming Laptop Pro",
    "description": "Gaming Laptop",
    "price": 1299.99,
    "category": "Electronics",
    "image": "laptop.jpg",
    "stock": 15,
    "createdAt": "2025-12-23T10:00:00Z"
  }
}

VALIDATION:
- ✅ Only provided fields are updated
- ✅ Verify product exists
```

#### 5️⃣ **Delete Product** (DELETE) 🔒 *Admin Only*
```
DELETE /api/products/:id

EXAMPLE: DELETE /api/products/1

RESPONSE (200 OK):
{
  "message": "Product deleted successfully",
  "data": {
    "id": 1,
    "name": "Laptop",
    "description": "Gaming Laptop",
    "price": 999.99,
    "category": "Electronics",
    "image": "laptop.jpg",
    "stock": 10,
    "createdAt": "2025-12-23T10:00:00Z"
  }
}

ERROR (404 Not Found):
{
  "message": "Product not found"
}
```

---

## 📊 Data Models

### User Model
```json
{
  "id": 1,
  "email": "user@example.com",
  "password": "hashed_password",
  "name": "John Doe",
  "createdAt": "2025-12-23T10:00:00Z"
}
```

### Product Model
```json
{
  "id": 1,
  "name": "Laptop",
  "description": "Gaming Laptop",
  "price": 999.99,
  "category": "Electronics",
  "image": "laptop.jpg",
  "stock": 10,
  "createdAt": "2025-12-23T10:00:00Z"
}
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **bcryptjs** | Password hashing |
| **jsonwebtoken** | JWT authentication |
| **cors** | Cross-origin requests |
| **dotenv** | Environment variables |
| **nodemon** | Development server auto-reload |

---

## 🚀 Getting Started

### 1. Installation
```bash
cd backend
npm install
```

### 2. Environment Variables
Create a `.env` file:
```env
PORT=5000
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### 3. Run Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:5000`

---

## 📋 API Testing Checklist

- [ ] **Sign Up** - Create new user account
- [ ] **Login** - Authenticate and receive JWT token
- [ ] **Get Products** - Retrieve all products
- [ ] **Get Product by ID** - Retrieve specific product
- [ ] **Create Product** - Add new product (Admin)
- [ ] **Update Product** - Modify existing product (Admin)
- [ ] **Delete Product** - Remove product (Admin)
- [ ] **Forgot Password** - Request password reset
- [ ] **Error Handling** - Verify error responses
- [ ] **Input Validation** - Test with invalid data

---

## 🔒 Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT token-based authentication
- ✅ CORS enabled
- ✅ Input validation
- ✅ Error handling middleware

---

## 📝 Future Enhancements

- [ ] Integrate MongoDB/PostgreSQL database
- [ ] Implement JWT middleware for protected routes
- [ ] Add role-based access control (Admin/User)
- [ ] Email notifications (password reset, order confirmation)
- [ ] Add shopping cart functionality
- [ ] Order management system
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] User profile management
- [ ] Product reviews and ratings

---

## 📞 Support

For issues or questions about the backend API, refer to the code documentation or test the endpoints using Postman/Thunder Client.

---

**Happy Coding! 🎉**
   