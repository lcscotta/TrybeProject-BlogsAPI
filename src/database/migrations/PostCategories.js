'use strict';

export async function up(queryInterface, Sequelize) {
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
}
export async function down(queryInterface) {
    await queryInterface.dropTable('PostCategories');
}
