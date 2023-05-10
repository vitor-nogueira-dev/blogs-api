module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
    primaryKey: ['postId', 'categoryId'],
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'postId',
      through: PostCategory,
      otherKey: 'categoryId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'categoryId',
      through: PostCategory,
      otherKey: 'postId',
    });
  };

  return PostCategory;
};
