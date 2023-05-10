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

module.exports = router;
