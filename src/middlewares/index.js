const { validateFieldsLogin } = require('./validateFieldsLogin.middleware');
const { validateUser } = require('./validate.user.middleware');
const { authMiddleware } = require('./auth.middleware');
const { validateCategory } = require('./validate.category.middleware');
const { validatePost, validateFieldsPost } = require('./validate.post.middleware');

module.exports = {
  validateFieldsLogin,
  validateUser,
  authMiddleware,
  validateCategory,
  validatePost,
  validateFieldsPost,
};
