const AuthorProfile = require('../models/AuthorProfile');

// Create or update profile for authenticated author
const upsertMyProfile = async (req, res) => {
  try {
    const { id } = req.user || {};
    if (!id) return res.status(401).json({ message: 'Unauthorized' });
    const { age, address, mobile, booksPublished } = req.body;
    const profile = await AuthorProfile.findOneAndUpdate(
      { author: id },
      { author: id, age, address, mobile, booksPublished },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    return res.status(200).json({ message: 'Profile saved', profile });
  } catch (err) {
    return res.status(500).json({ message: 'Error saving profile', error: err.message });
  }
};

// Get profile by author id
const getProfileByAuthor = async (req, res) => {
  try {
    const { authorId } = req.params;
    const profile = await AuthorProfile.findOne({ author: authorId });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    return res.status(200).json({ profile });
  } catch (err) {
    return res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
};

// List all profiles
const listProfiles = async (_req, res) => {
  try {
    const profiles = await AuthorProfile.find().populate('author', 'email');
    return res.status(200).json({ profiles });
  } catch (err) {
    return res.status(500).json({ message: 'Error listing profiles', error: err.message });
  }
};

module.exports = { upsertMyProfile, getProfileByAuthor, listProfiles };
