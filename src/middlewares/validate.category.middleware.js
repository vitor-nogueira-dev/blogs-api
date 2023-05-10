const validateCategory = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next({ message: '"name" is required', status: 400 });
  }
  return next();
};

module.exports = { validateCategory };