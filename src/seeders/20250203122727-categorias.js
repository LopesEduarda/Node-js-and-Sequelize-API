'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
        titutlo: 'Node.js',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titutlo: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titutlo: 'Python',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titutlo: 'C#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};