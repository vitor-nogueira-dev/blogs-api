const postService = require('../services/post.service');
const userService = require('../services/user.service');

const validatePostOwner = async (req, res, next) => {
  const { id } = req.params;
  const post = await postService.getAllPostsOrPostById(id);

  if (!Array.isArray(post)) {
    return next({ message: post, status: 404 });
  }
  // verificando se o usuario logado quem fez o post
  const { id: userId } = await userService.findUserByEmail(req.user.email);
  if (post && post[0].dataValues.userId !== userId) {
    return next({
      message: 'Unauthorized user',
      status: 401,
    });
  }
  return next();
};

module.exports = { validatePostOwner };