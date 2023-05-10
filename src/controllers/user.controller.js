const generateToken = require('../helpers/token.generate.helper');
const userService = require('../services/user.service');

const userController = {
  insertUser: async (req, res, next) => {
    try {
      const newUser = req.body;

      const findUser = await userService.findUserByEmail(newUser.email);

      if (findUser) {
        return next({ message: 'User already registered', status: 409 });
      }

      const user = await userService.insertUser(newUser);
      const removePassword = { ...user, password: undefined };
      console.log(removePassword, 'removePassword');
      const token = generateToken(removePassword);

      res.status(201).json({ token });
    } catch (error) {
      return next(error);
    }
  },
  findAllUsers: async (req, res, next) => {
    try {
      const users = await userService.findAllUsers();
      return res.status(200).json(users);
    } catch (e) {
      return next(e);
    }
  },
  findUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userService.findUserById(id);
      if (!user) {
        return next({ message: 'User does not exist', status: 404 });
      }
      return res.status(200).json(user);
    } catch (e) {
      return next(e);
    }
  },
};

module.exports = userController;
