'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error('Cannot be an email.');
            }
          }
        }
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
        }
      },
      teamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: "Teams"}
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256]
        }
      },
      isCoach: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      streak:{
        type: DataTypes.INTEGER,
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'createdAt', 'updatedAt']
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] }
        },
        loginUser: {
          attributes: {}
        }
      }
    }
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Goal, {foreignKey: 'userId'})
    User.hasMany(models.Survey, {foreignKey: 'userId'})
    User.hasMany(models.Post, {foreignKey: 'coachId'})
    User.belongsTo(models.Team, {foreignKey: 'teamId'})
  };
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email, isCoach, teamId, streak, firstName, lastName } = this; // context will be the User instance
    return { id, username, email, isCoach, teamId, streak, firstName, lastName };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ email, password, username, firstName, lastName, isCoach, teamId }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      email, hashedPassword, username, firstName, lastName, isCoach, teamId
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};
