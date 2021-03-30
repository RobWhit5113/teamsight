'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goal', {
    swimmerId: DataTypes.INTEGER,
    goal: DataTypes.STRING
  }, {});
  Goal.associate = function(models) {
    // associations can be defined here
  };
  return Goal;
};