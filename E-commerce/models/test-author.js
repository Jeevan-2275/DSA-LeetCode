// test-author.js
require('dotenv').config();
const { connectMongo, mongoose } = require('./config/mongoose');
const Author = require('./models/Author');
const AuthorProfile = require('./models/AuthorProfile');

(async () => {
  try {
    console.log('Connecting to MongoDB...');
    await connectMongo();

    // Use upsert to avoid duplicate key errors on repeated runs
    const email = 'author@example.com';
    const author = await Author.findOneAndUpdate(
      { email },
      { email, password: 'secret123' },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    const profile = await AuthorProfile.findOneAndUpdate(
      { author: author._id },
      {
        author: author._id,
        age: 30,
        address: '123 Main St',
        mobile: '555-1234',
        booksPublished: 5,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log('✓ Author and Profile created/updated:', { author, profile });
  } catch (err) {
    console.error('✗ Error running test-author:', err);
    console.error('Tip: Ensure MongoDB server is running on localhost:27017');
  } finally {
    await mongoose.disconnect();
    console.log('✓ MongoDB disconnected');
  }
})();
