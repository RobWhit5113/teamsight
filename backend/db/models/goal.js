'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goal', {
    userId: {
      type: DataTypes.INTEGER,
      references: {model:"Users"}
    },
    goal: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Goal.associate = function(models) {
    // associations can be defined here
    Goal.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Goal;
};