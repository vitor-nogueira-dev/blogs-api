const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next({ message: 'Token not found', status: 401 });
  }

  try {
    req.user = jwt.verify(authHeader, process.env.JWT_SECRET);
    return next();
  } catch (err) {
    return next({ message: 'Expired or invalid token', status: 401 });
  }
};

module.exports = { authMiddleware };
