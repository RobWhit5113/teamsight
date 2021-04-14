'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    coachId: {
      type: DataTypes.INTEGER,
      references: {model:"Users"},
      allowNull: false
    },
    teamId: {
      type: DataTypes.INTEGER,
      references: {model:"Teams"},
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postMedia: DataTypes.STRING,
    externalLink: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, {foreignKey: 'coachId'})
    Post.belongsTo(models.User, {foreignKey: 'teamId'})
  };
  return Post;
};