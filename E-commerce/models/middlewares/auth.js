const jwt = require('jsonwebtoken');

// Simple JWT auth middleware using Authorization: Bearer <token>
module.exports = function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const [scheme, token] = header.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
    req.user = payload; // { id, email }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
