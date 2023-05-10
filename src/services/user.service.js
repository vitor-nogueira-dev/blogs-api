const { User } = require('../models');

const userService = {
  insertUser: async (user) => User.create(user),
  findUserByEmail: async (email) => User.findOne({ where: { email } }),
  findAllUsers: async () =>
    User.findAll({ attributes: { exclude: ['password'] } }),
  findUserById: async (id) =>
    User.findOne({ where: { id }, attributes: { exclude: ['password'] } }),
};

module.exports = userService;
