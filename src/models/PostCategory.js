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
    tableName: 'posts_categories'
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'id',
      through: PostCategory,
      otherKey: 'category_id',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'id',
      through: PostCategory,
      otherKey: 'post_id',
    });
  };

  return PostCategory;
};
