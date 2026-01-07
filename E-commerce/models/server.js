require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectMongo } = require('./config/mongoose');

const authorRoutes = require('./routes/authorRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect MongoDB
connectMongo();

// Routes
app.use('/api/authors', authorRoutes);
app.use('/api/author-profiles', profileRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n✓ Author API Server running on http://localhost:${PORT}`);
  console.log(`  POST   /api/authors/register`);
  console.log(`  POST   /api/authors/login`);
  console.log(`  GET    /api/authors/me (protected)`);
  console.log(`  GET    /api/author-profiles`);
  console.log(`  GET    /api/author-profiles/:authorId`);
  console.log(`  POST   /api/author-profiles/me (protected)\n`);
});
