'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Surveys', [
      {
        userId: 1,
        answerOne: 5,
        isCompleted: true
      },
      {
        userId: 2,
        answerOne: 4,
        isCompleted: true
      },
      {
        userId: 3,
        answerOne: 2,
        isCompleted: true
      },
      {
        userId: 4,
        answerOne: 3,
        isCompleted: true
      },
      
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Surveys', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
