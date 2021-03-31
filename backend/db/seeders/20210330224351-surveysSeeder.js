'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Surveys', [
      {
        userId: 1,
        surveyDetailId: 1,
        answerOne: 5,
        answerTwo: 3,
        answerThree: 4,
        answerFour: 'My shoulder hurts',
        isCompleted: true
      },
      {
        userId: 1,
        surveyDetailId: 2,
        answerOne: 5,
        answerTwo: 5,
        answerThree: 5,
        answerFour: 'I feel GREAT!',
        isCompleted: true
      },
      {
        userId: 1,
        surveyDetailId: 1,
        answerOne: 2,
        answerTwo: 3,
        answerThree: 2,
        answerFour: 'I am really tired',
        isCompleted: true
      },
      {
        userId: 1,
        surveyDetailId: 2,
        answerOne: 1,
        answerTwo: 1,
        answerThree: 1,
        answerFour: 'Gassed!',
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
