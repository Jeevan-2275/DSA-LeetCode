# Author & Profile Management API

A complete author authentication and profile management system built with Node.js, Express, and MongoDB.

## 📁 Project Structure

```
models/
├── .env                          # Environment variables
├── package.json                  # Dependencies
├── server.js                     # Express app & routes
├── mongoose.js                   # MongoDB connection
├── auth.js                       # JWT middleware
│
├── author.js                     # Author schema (email, password)
├── authorProfile.js              # AuthorProfile schema (age, address, mobile, books)
│
├── authorController.js           # Author logic (register, login, me)
├── authorProfileController.js    # Profile logic (CRUD)
│
├── authorRoutes.js               # Author endpoints
├── profileRoutes.js              # Profile endpoints
│
├── test-author.js                # Test script
└── README.md                     # This file
```

## 📊 Database Schemas

### Author (Login Info)
```javascript
{
  email: String (unique, required),
  password: String (hashed, required),
  createdAt: Date,
  updatedAt: Date
}
```

### AuthorProfile (Profile Details)
```javascript
{
  author: ObjectId (ref: Author, required),
  age: Number,
  address: String,
  mobile: String,
  booksPublished: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd C:\Users\admin\Desktop\DSA\DSA-LeetCode\E-commerce\models
npm install
```

### 2. Configure Environment
The `.env` file is pre-configured:
```env
MONGODB_URI=mongodb://localhost:27017/reactbasic
JWT_SECRET=dev_secret_please_change
PORT=3000
```

### 3. Ensure MongoDB is Running
```bash
# Start MongoDB on your machine
```

### 4. Run Server
```bash
node server.js
```
✓ Server starts on `http://localhost:3000`

## 📡 API Endpoints

### Author Management

#### Register Author
```http
POST /api/authors/register
Content-Type: application/json

{
  "email": "author@example.com",
  "password": "securePassword123"
}
```
**Response:**
```json
{
  "message": "Author registered",
  "author": {
    "id": "66abc123...",
    "email": "author@example.com"
  }
}
```

#### Login Author
```http
POST /api/authors/login
Content-Type: application/json

{
  "email": "author@example.com",
  "password": "securePassword123"
}
```
**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "author": {
    "id": "66abc123...",
    "email": "author@example.com"
  }
}
```

#### Get Current Author (Protected)
```http
GET /api/authors/me
Authorization: Bearer <token_from_login>
```
**Response:**
```json
{
  "author": {
    "_id": "66abc123...",
    "email": "author@example.com",
    "createdAt": "2026-01-07T..."
  }
}
```

---

### Profile Management

#### List All Profiles
```http
GET /api/author-profiles
```
**Response:**
```json
{
  "profiles": [
    {
      "_id": "66abc456...",
      "author": {
        "_id": "66abc123...",
        "email": "author@example.com"
      },
      "age": 30,
      "address": "123 Main St",
      "mobile": "555-1234",
      "booksPublished": 5
    }
  ]
}
```

#### Get Profile by Author ID
```http
GET /api/author-profiles/:authorId
```
**Response:**
```json
{
  "profile": {
    "_id": "66abc456...",
    "author": "66abc123...",
    "age": 30,
    "address": "123 Main St",
    "mobile": "555-1234",
    "booksPublished": 5
  }
}
```

#### Create/Update My Profile (Protected)
```http
POST /api/author-profiles/me
Authorization: Bearer <token_from_login>
Content-Type: application/json

{
  "age": 30,
  "address": "123 Main St",
  "mobile": "555-1234",
  "booksPublished": 5
}
```
**Response:**
```json
{
  "message": "Profile saved",
  "profile": {
    "_id": "66abc456...",
    "author": "66abc123...",
    "age": 30,
    "address": "123 Main St",
    "mobile": "555-1234",
    "booksPublished": 5
  }
}
```

## 🧪 Testing

### Run Test Script
```bash
node test-author.js
```

This script:
- Connects to MongoDB
- Creates/updates test author with email `author@example.com`
- Creates/updates test profile with sample data
- Displays results
- Disconnects gracefully

## 🔐 Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

Token is obtained from `/api/authors/login` and valid for 7 days.

## 🛠 Key Features

✅ **Email & Password Authentication** - Secure login with bcrypt hashing  
✅ **JWT Tokens** - 7-day expiring tokens for stateless auth  
✅ **Profile Management** - Complete CRUD for author profiles  
✅ **MongoDB Integration** - Mongoose schemas with validation  
✅ **Error Handling** - Comprehensive error messages  
✅ **Upsert Support** - Update or create profiles in one call  
✅ **Population** - Reference resolution (author info in profiles)  

## 📦 Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-origin support
- **dotenv** - Environment variables
- **nodemon** - Auto-reload (dev)

## 🔧 Environment Variables

```env
MONGODB_URI          # MongoDB connection string
JWT_SECRET           # Secret key for JWT signing
PORT                 # Server port (default: 3000)
```

## 🐛 Troubleshooting

**Error: "MongoDB connection error"**
- Ensure MongoDB is running on localhost:27017
- Check `MONGODB_URI` in `.env`

**Error: "Unauthorized: Invalid token"**
- Token may be expired (7 days)
- Re-login to get a fresh token

**Error: "Email and password are required"**
- Ensure both fields are in request body
- Check Content-Type is `application/json`

## 📝 Example Workflow

1. **Register**
   ```bash
   curl -X POST http://localhost:3000/api/authors/register \
     -H "Content-Type: application/json" \
     -d '{"email":"john@example.com","password":"password123"}'
   ```

2. **Login**
   ```bash
   curl -X POST http://localhost:3000/api/authors/login \
     -H "Content-Type: application/json" \
     -d '{"email":"john@example.com","password":"password123"}'
   ```
   → Copy the `token` from response

3. **Get Your Profile**
   ```bash
   curl -X GET http://localhost:3000/api/authors/me \
     -H "Authorization: Bearer TOKEN_HERE"
   ```

4. **Update Your Profile**
   ```bash
   curl -X POST http://localhost:3000/api/author-profiles/me \
     -H "Authorization: Bearer TOKEN_HERE" \
     -H "Content-Type: application/json" \
     -d '{"age":30,"address":"Main St","mobile":"555-1234","booksPublished":5}'
   ```

## 📄 License

ISC

---

**Created:** January 2026  
**Status:** ✅ Ready for Development
