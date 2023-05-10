const { validateFieldsLogin } = require('./validateFieldsLogin.middleware');
const { validateUser } = require('./validate.user.middleware');

module.exports = {
  validateFieldsLogin,
  validateUser,
};
