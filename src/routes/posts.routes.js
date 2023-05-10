const express = require('express');
const Controller = require('../controllers/post.controller');
const Middleware = require('../middlewares');

const router = express.Router();

// endpoint para cadastrar um novo post
router.post(
  '/',
  Middleware.authMiddleware,
  Middleware.validateFieldsPost,
  Middleware.validatePost,
  Controller.insertPost,
);

// endpoint para listar todos os posts
router.get('/', Middleware.authMiddleware, Controller.getAllPostsOrPostById);

// endpoint para listar um post específico por id
router.get('/:id', Middleware.authMiddleware, Controller.getAllPostsOrPostById);

// endpoint para editar um post específico por id
router.put(
'/:id',
  Middleware.authMiddleware,
  Middleware.validateFieldsPost,
  Middleware.validatePostOwner,
  Controller.updatePost,
);

module.exports = router;
