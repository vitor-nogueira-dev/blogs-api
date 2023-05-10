const { validateFieldsLogin } = require('./validateFieldsLogin.middleware');
const { validateUser } = require('./validate.user.middleware');
const { authMiddleware } = require('./auth.middleware');

module.exports = {
  validateFieldsLogin,
  validateUser,
  authMiddleware,
};
