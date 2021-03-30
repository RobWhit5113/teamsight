'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Surveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      swimmerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:"Swimmers"}

      },
      surveyDetailsId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:"SurveyDetails"}
      },
      answerOne: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      answerTwo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      answerThree: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      answerFour: {
        type: Sequelize.STRING
      },
      isCompleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Surveys');
  }
};