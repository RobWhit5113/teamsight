'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coachId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:"Users"}
      },
      teamId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:"Teams"}
      },
      post: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postMedia: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};