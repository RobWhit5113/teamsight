'use strict';
module.exports = (sequelize, DataTypes) => {
  const Survey = sequelize.define('Survey', {
    userId: 
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model:'Users'}
    },
    answerOne: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  Survey.associate = function(models) {
    // associations can be defined here
    Survey.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Survey;
};