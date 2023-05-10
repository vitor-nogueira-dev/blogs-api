const express = require('express');
const Controller = require('../controllers/user.controller');
const Middleware = require('../middlewares');

const router = express.Router();

// endpoint para cadastrar um novo usuário
router.post('/', Middleware.validateUser, Controller.insertUser);
// endpoint para recuperar todos os usuários
router.get('/', Middleware.authMiddleware, Controller.findAllUsers);
// endpoint para recuperar um usuário específico pelo id
router.get('/:id', Middleware.authMiddleware, Controller.findUserById);

module.exports = router;
