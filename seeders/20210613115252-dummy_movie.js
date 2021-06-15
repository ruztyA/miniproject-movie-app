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
     "Movies",
     [
       {
        title: "Titanic",
        synopsis: "Kapal Titanic tenggelam di kutub Utara" ,
        trailer: "ini-trailer-Titanic" ,
        poster: "ini-poster-Titanic",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        title: "Stand by Me Doraemon",
        synopsis: "Kucing dari masa depan datang untuk membantu seorang anak pemalas" ,
        trailer: "ini-trailer-Doraemon" ,
        poster: "ini-poster-Doraemon",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        title: "Matrix",
        synopsis: "Seorang lelaki yang memiliki skill dapat menghindari peluru" ,
        trailer: "ini-trailer-Matrix" ,
        poster: "ini-poster-Matrix",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        title: "Marmut Merah Jambu",
        synopsis: "Kisah cinta monyet Raditya Dika" ,
        trailer: "ini-trailer-MarmutMerahJambu" ,
        poster: "ini-poster-MarmutMerahJambu",
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
