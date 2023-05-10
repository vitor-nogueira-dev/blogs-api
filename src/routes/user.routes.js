const express = require('express');
const Controller = require('../controllers/user.controller');
const Middleware = require('../middlewares');

const router = express.Router();

// endpoint para cadastrar um novo usuário
router.post('/', Middleware.validateUser, Controller.insertUser);

module.exports = router;
