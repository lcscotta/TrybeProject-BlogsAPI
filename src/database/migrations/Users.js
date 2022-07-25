'use strict';

export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        displayName: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true,
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        image: {
            allowNull: true,
            type: Sequelize.STRING,
        },
    });
}
export async function down(queryInterface) {
    await queryInterface.dropTable('Users');
}