const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Author = require('../models/Author');

// Register new author
const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const existing = await Author.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Author already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const author = await Author.create({ email, password: hashed });
    return res.status(201).json({
      message: 'Author registered',
      author: { id: author._id, email: author.email },
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error registering author', error: err.message });
  }
};

// Login author and return JWT
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const author = await Author.findOne({ email });
    if (!author) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const ok = await bcrypt.compare(password, author.password);
    if (!ok) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: author._id, email: author.email }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '7d' });
    return res.status(200).json({ message: 'Login successful', token, author: { id: author._id, email: author.email } });
  } catch (err) {
    return res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

// Return current author info from token
const me = async (req, res) => {
  try {
    const { id } = req.user || {};
    if (!id) return res.status(401).json({ message: 'Unauthorized' });
    const author = await Author.findById(id).select('_id email createdAt');
    if (!author) return res.status(404).json({ message: 'Author not found' });
    return res.status(200).json({ author });
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
};

module.exports = { register, login, me };
