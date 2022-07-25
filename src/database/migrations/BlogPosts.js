'use strict';

export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('BlogPosts', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        title: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        content: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        userId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'Users',
                key: 'id',
            },
        },
        published: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updated: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
}
export async function down(queryInterface) {
    await queryInterface.dropTable('BlogPosts');
}