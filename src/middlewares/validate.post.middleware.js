const categoriesHelper = require('../helpers/categories.helper');

const validateFieldsPost = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return next({ message: 'Some required fields are missing', status: 400 });
  }
  return next();
};

const validatePost = async (req, res, next) => {
  const { body } = req;
  const { categoryIds } = body;
  if (!categoryIds || !categoryIds.length || !Array.isArray(categoryIds)) {
    return next({ message: 'Some required fields are missing', status: 400 });
  }
  try {
    await categoriesHelper.verifyCategoryIdsExistence(categoryIds);
    return next();
  } catch (error) {
    return next({ message: error.message, status: 400 });
  }
};

module.exports = { validatePost, validateFieldsPost };
