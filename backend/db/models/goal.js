'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goal', {
    swimmerId: {
      type: DataTypes.INTEGER,
      references: {model:"Swimmers"}
    },
    goal: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Goal.associate = function(models) {
    // associations can be defined here
  };
  return Goal;
};