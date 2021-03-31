'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SurveyDetails', [
      {
        title: 'Pre-Practice',
        fieldOne: 'How are you feeling today?',
        fieldTwo: 'Are you excited for training?',
        fieldThree: 'Are you tired going into practice?',
        fieldFour: 'Anything else that you what me to know?',
      },
      {
        title: 'Post-Practice',
        fieldOne: 'How hard was practice for you?',
        fieldTwo: 'How tired are you?',
        fieldThree: 'Did you enjoy practice?',
        fieldFour: 'Anything else that you what me to know?',
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
    return queryInterface.bulkDelete('SurveyDetails', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
