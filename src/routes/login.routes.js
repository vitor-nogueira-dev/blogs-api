const express = require('express');
const Controller = require('../controllers/login.controller');
const Middleware = require('../middlewares');

const router = express.Router();

// endpoint para fazer login
router.post('/', Middleware.validateFieldsLogin, Controller.loginUser);

module.exports = router;
