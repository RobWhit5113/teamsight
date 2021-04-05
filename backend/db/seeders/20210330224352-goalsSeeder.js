'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Goals', [
      {
        userId: 1,
        goal: 'I want to go 1:00 in 100 breastroke',
        type: 'eoy',
        isCompleted: false
      },
      {
        userId: 1,
        goal: 'I want to work on my turns',
        type: 'weekly',
        isCompleted: false
      },
      {
        userId: 1,
        goal: 'I want to take 3 dolphin kicks of every wall',
        type: 'weekly',
        isCompleted: false
      },
      {
        userId: 1,
        goal: 'I want to work on my turns',
        type: 'weekly',
        isCompleted: false
      },
      {
        userId: 1,
        goal: 'I want to go 55 in 100 backstroke',
        type: 'eoy',
        isCompleted: false
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
    return queryInterface.bulkDelete('Goals', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
