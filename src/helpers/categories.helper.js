const categoriesService = require('../services/categories.service');

const verifyCategoryIdsExistence = async (categoryIds) => {
  const promises = categoryIds.map(async (categoryId) => {
    const category = await categoriesService.findCategoryById(categoryId);
    if (!category) {
      throw new Error('one or more "categoryIds" not found');
    }
  });
  await Promise.all(promises);
};

module.exports = { verifyCategoryIdsExistence };
