const { Category } = require('../models');

const Categories = {
  insertCategory: async (category) => Category.create(category),
  findAllCategories: async () => Category.findAll(),
  findCategoryById: async (id) => Category.findByPk(id),
};

module.exports = Categories;
