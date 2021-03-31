'use strict';
module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define('Survey', {
    UserId: 
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model:"Users"}
    },
    surveyDetailId: {
     type: DataTypes.INTEGER,
     allowNull: false,
     references: {model:"SurveyDetails"}
    },
    answerOne: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answerTwo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answerThree: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answerFour: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  Survey.associate = function(models) {
    // associations can be defined here
    Survey.belongsTo(models.User, {foreignKey: 'userId'})
    Survey.belongsTo(models.SurveyDetail, {foreignKey: 'surveyDetailId'})
  };
  return Survey;
};