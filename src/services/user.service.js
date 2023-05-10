const { User } = require('../models');

const userService = {
  insertUser: async (user) => User.create(user),
  findUserByEmail: async (email) => User.findOne({ where: { email } }),
};

module.exports = userService;
