'use strict';

export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true,
        },
    });
}
export async function down(queryInterface) {
    await queryInterface.dropTable('Categories');
}