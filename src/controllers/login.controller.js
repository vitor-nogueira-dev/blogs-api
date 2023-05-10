const generateToken = require('../helpers/token.generate.helper');
const loginService = require('../services/login.service');

// funcao para fazer login
const loginController = {
  loginUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await loginService.findUser(email, password);

      if (!user) {
        return next({ message: 'Invalid fields', status: 400 });
      }

      const payload = { email };
      const token = generateToken(payload);

      return res.status(200).json({ token });
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = loginController;
