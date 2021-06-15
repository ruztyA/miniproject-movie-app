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
      "MovieCategories",
      [
        {
          categoryId: 1,
          movieId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          movieId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          movieId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          movieId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

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
