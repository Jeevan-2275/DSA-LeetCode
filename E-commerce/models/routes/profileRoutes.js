const express = require('express');
const router = express.Router();
const { upsertMyProfile, getProfileByAuthor, listProfiles } = require('../controllers/authorProfileController');
const auth = require('../middlewares/auth');

// Author profile routes
router.get('/', listProfiles);
router.get('/:authorId', getProfileByAuthor);
router.post('/me', auth, upsertMyProfile);

module.exports = router;
