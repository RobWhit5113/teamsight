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
        question: "what are good shoulder exercises for shoulder pain?",
        isCompleted: true
      },
      {
        userId: 5,
        answerOne: 3,
        question: "I am really tired!",
        isCompleted: true,

      },
      {
        userId: 6,
        answerOne: 4,
        isCompleted: true,

      },
      {
        userId: 7,
        answerOne: 1,
        isCompleted: true,

      },
      {
        userId: 8,
        answerOne: 5,
        isCompleted: true,

      },
      {
        userId: 9,
        answerOne: 2,
        question: "My dog died last night",
        isCompleted: true,

      },
      {
        userId: 10,
        answerOne: 3,
        isCompleted: true,

      },
      {
        userId: 11,
        answerOne: 4,
        isCompleted: true,

      },
      {
        userId: 12,
        answerOne: 5,
        question: "What should I be eating before practice?",
        isCompleted: true,

      },
      {
        userId: 13,
        answerOne: 2,
        isCompleted: true,

      },
      {
        userId: 14,
        answerOne: 4,
        isCompleted: true,

      },
      {
        userId: 15,
        answerOne: 3,
        isCompleted: true,

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
