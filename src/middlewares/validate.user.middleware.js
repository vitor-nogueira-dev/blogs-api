const validateName = (name, next) => {
  if (name.length < 8) {
    next({
      message: '"displayName" length must be at least 8 characters long',
      status: 400,
    });
  }
};
const validateEmail = (email, next) => {
  const regexValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regexValidEmail.test(email)) {
    return next({ message: '"email" must be a valid email', status: 400 });
  }
};

const validatePassword = (password, next) => {
  if (password.length < 6) {
    return next({
      message: '"password" length must be at least 6 characters long',
      status: 400,
    });
  }
};

const validateUser = (req, res, next) => {
  try {
    const { displayName, email, password } = req.body;
    validateName(displayName, next);
    validateEmail(email, next);
    validatePassword(password, next);
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = { validateUser };
