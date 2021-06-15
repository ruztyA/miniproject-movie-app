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
      "MovieInfos",
      [
        {
          movieId: 1,
          releaseDate: "1998-01-05",
          director: "James Cameron",
          featuredSong: "My Heart Will Go On",
          budget:255666999,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 2,
          releaseDate: "2014-12-18",
          director: " Takashi Yamazaki",
          featuredSong: "Himawari no Yakusoku",
          budget:34999999,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 3,
          releaseDate: "1999-07-03",
          director: "Lana Wachowski",
          featuredSong: "Rock is Dead",
          budget:63123999,
          createdAt: new Date(),
          updatedAt: new Date()   
        },
        {
          movieId: 4,
          releaseDate: "2014-11-19",
          director: " Raditya Dika",
          featuredSong: "Anugerah Terindah yang Pernah Kumiliki",
          budget:712999,
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
