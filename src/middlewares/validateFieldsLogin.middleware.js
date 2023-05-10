// middleware para validar se os campos emails e senha estão preenchidos
const validateFieldsLogin = (req, _res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next({ message: 'Some required fields are missing', status: 400 });
  }

  return next();
};

module.exports = { validateFieldsLogin };
