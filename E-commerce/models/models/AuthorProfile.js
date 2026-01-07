const mongoose = require('mongoose');

// Simple Author profile schema with basic fields
const AuthorProfileSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
    age: {
      type: Number,
      min: 0,
      default: 0,
    },
    address: {
      type: String,
      trim: true,
      default: '',
    },
    mobile: {
      type: String,
      trim: true,
      default: '',
    },
    booksPublished: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AuthorProfile', AuthorProfileSchema);
