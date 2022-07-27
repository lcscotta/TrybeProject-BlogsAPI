'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
        postId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'BlogPosts',
                key: 'id',
            },
            primaryKey: true,
        },
        categoryId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'Categories',
                key: 'id',
            },
            primaryKey: true,
        },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PostCategories');
  },
}