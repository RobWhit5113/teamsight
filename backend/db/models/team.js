'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    teamName: 
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    teamLogo: {
      type: DataTypes.STRING,
      
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Team.associate = function(models) {
    // associations can be defined here
    Team.hasMany(models.User, {foreignKey: 'teamId'})
    Team.hasMany(models.Post, {foreignKey: 'teamId'})
  };
  return Team;
};