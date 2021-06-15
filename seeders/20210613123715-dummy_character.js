'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
      "Characters",
      [
        {
          movieId: 1,
          castId: 1,
          characterName: "Rose",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 1,
          castId: 2,
          characterName: "Jack",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 2,
          castId: 3,
          characterName: "Nobita",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 2,
          castId: 4,
          characterName: "Doraemon",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 3,
          castId: 5,
          characterName: "John",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 3,
          castId: 6,
          characterName: "Jane",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 4,
          castId: 7,
          characterName: "Nobita",
          createdAt: new Date(),
          updatedAt: new Date()      
        },
        {
          movieId: 4,
          castId: 8,
          characterName: "Doraemon",
          createdAt: new Date(),
          updatedAt: new Date()      
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
