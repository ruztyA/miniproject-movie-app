"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      //required
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      //unique
      userName: {
        type: Sequelize.STRING,
        unique: true,
      },
      //required & unique
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      profilPicture: {
        type: Sequelize.STRING,
      },
      //required (length > 8 && < 50)
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          min: {
            args: 8,
            msg: "Password must be more than 8 characters",
          },
        },
      },
      //required
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
