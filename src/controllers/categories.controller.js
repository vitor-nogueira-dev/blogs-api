const categoriesService = require('../services/categories.service');

const categoriesController = {
  insertCategory: async (req, res, next) => {
    try {
      const newCategory = req.body;

      const category = await categoriesService.insertCategory(newCategory);

      return res.status(201).json(category);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = categoriesController;
