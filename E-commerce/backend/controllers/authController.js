const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const database = require('../config/db');

const users = database.users;


const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Email, password, and name are required' });
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      email,
      password: hashedPassword,
      name
    };

    users.push(newUser);
    res.status(201).json({ message: 'User created successfully', user: { id: newUser.id, email: newUser.email, name: newUser.name } });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up', error: error.message });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '7d' });

    res.status(200).json({ message: 'Login successful', token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Password reset email sent', email });
  } catch (error) {
    res.status(500).json({ message: 'Error in forgot password', error: error.message });
  }
};

module.exports = { signUp, login, forgotPassword };
