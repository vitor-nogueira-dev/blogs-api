const postService = require('../services/post.service');
const userService = require('../services/user.service');

const postController = {
  insertPost: async (req, res) => {
    try {
      const post = req.body;

      const {
        dataValues: { id },
      } = await userService.findUserByEmail(req.user.email);
      const insertedPost = await postService.insertPost({
        ...post,
        userId: id,
      });

      return res.status(201).json(insertedPost);
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ message: 'Erro interno' });
    }
  },
};

module.exports = postController;
