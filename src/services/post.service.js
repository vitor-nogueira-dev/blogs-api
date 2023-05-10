const { BlogPost, PostCategory, User, Category } = require('../models');
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
  // Busca todos os posts ou um post específico por id
  getAllPostsOrPostById: async (id = null) => {
    const whereCondition = id && { id };

    const blogPosts = await BlogPost.findAll({
      where: whereCondition,
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      }, {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      }],
    });
    console.log(blogPosts, 'blogPosts');
    if (!blogPosts.length) {
      return 'Post does not exist';
    }

    return blogPosts;
  },
    // Busca um post específico por id
  getPostById: async (id) => BlogPost.findOne({ where: { id } }),
  updatePost: async (id, post) => {
    const { title, content } = post;
    await BlogPost.update({
      title, content,
    }, { where: { id } });

    return postService.getAllPostsOrPostById(id);
  },
};

module.exports = postService;
