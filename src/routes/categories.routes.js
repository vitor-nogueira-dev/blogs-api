const express = require('express');
const Controller = require('../controllers/categories.controller');
const Middleware = require('../middlewares');

const router = express.Router();

// endpoint para cadastrar uma nova categoria
router.post(
  '/',
  Middleware.authMiddleware,
  Middleware.validateCategory,
  Controller.insertCategory,
);
// endpoint para recuperar todas as categorias
router.get('/', Middleware.authMiddleware, Controller.findAllCategories);

module.exports = router;
