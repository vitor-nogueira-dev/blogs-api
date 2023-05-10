const { Category } = require('../models');

const Categories = {
  insertCategory: async (category) => Category.create(category),
};

module.exports = Categories;
