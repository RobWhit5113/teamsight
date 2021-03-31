'use strict';
module.exports = (sequelize, DataTypes) => {
  const SurveyDetail = sequelize.define('SurveyDetail', {
    title: DataTypes.STRING,
    fieldOne: DataTypes.STRING,
    fieldTwo: DataTypes.STRING,
    fieldThree: DataTypes.STRING,
    fieldFour: DataTypes.STRING
  }, {});
  SurveyDetail.associate = function(models) {
    // associations can be defined here
    SurveyDetail.hasMany(models.Survey, {foreignKey: 'surveyDetailId'})
  };
  return SurveyDetail;
};