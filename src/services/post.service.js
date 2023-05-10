const { BlogPost, PostCategory } = require('../models');
const { verifyCategoryIdsExistence } = require('../helpers/categories.helper');

const postService = {
  // Insere um novo post no banco de dados
  insertPost: async (post) => {
    const { title, content, categoryIds, userId } = post;

    await verifyCategoryIdsExistence(categoryIds);

    const newPost = await BlogPost.create({
      title,
      content,
      userId,
    });

    // Insere as categorias do post na tabela de relação posts_categories
    const postCategories = categoryIds.map((categoryId) => ({
      postId: newPost.id,
      categoryId,
    }));

    await PostCategory.bulkCreate(postCategories);

    return newPost;
  },
};

module.exports = postService;
