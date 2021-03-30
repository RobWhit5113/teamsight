'use strict';
module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define('Survey', {
    swimmerId: DataTypes.INTEGER,
    surveyDetailsId: DataTypes.INTEGER,
    answerOne: DataTypes.INTEGER,
    answerTwo: DataTypes.INTEGER,
    answerThree: DataTypes.INTEGER,
    answerFour: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN
  }, {});
  Survey.associate = function(models) {
    // associations can be defined here
  };
  return Survey;
};