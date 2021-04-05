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
    },
    type:{
      allowNull:false,
      type: DataTypes.ENUM(['weekly', 'eoy'])
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  }, {});
  Goal.associate = function(models) {
    // associations can be defined here
    Goal.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Goal;
};