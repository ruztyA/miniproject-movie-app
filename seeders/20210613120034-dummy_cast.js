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
      "Casts",
      [
        {
          nameCast: "Kate Winslet" ,
          profileCast: "ini-foto-katewinslet" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Leonardo Dicaprio" ,
          profileCast: "ini-foto-leonardo" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Pemeran Nobita" ,
          profileCast: "ini-foto-nobita" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Pemeran Doraemon" ,
          profileCast: "ini-foto-doraemon" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Keanu Reeves" ,
          profileCast: "ini-foto-keanu" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Winona Ryder" ,
          profileCast: "ini-foto-winona" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Raditya Dika" ,
          profileCast: "ini-foto-raditya" ,
          gender: "Male",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Nikita Willy" ,
          profileCast: "ini-foto-nikita" ,
          gender: "Female",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameCast: "Dian Sastro" ,
          profileCast: "ini-foto-dsastro" ,
          gender: "Female",
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
