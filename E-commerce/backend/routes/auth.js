const express = require('express');
const router = express.Router();
const { signUp, login, forgotPassword } = require('../controllers/authController');

router.post('/signup', signUp);       
router.post('/login', login);         
router.patch('/forgot-password', forgotPassword);  

module.exports = router;
