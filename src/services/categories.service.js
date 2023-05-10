const { Category } = require('../models');

const Categories = {
  insertCategory: async (category) => Category.create(category),
  findAllCategories: async () => Category.findAll(),
};

module.exports = Categories;
