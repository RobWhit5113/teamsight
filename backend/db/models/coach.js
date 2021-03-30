'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coach = sequelize.define(
    'Coach', 
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
    hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
  }, {});
  Coach.associate = function(models) {
    // associations can be defined here
  };

  Coach.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };
  Coach.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  Coach.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  Coach.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const coach = await Coach.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    if (coach && coach.validatePassword(password)) {
      return await Coach.scope('currentUser').findByPk(coach.id);
    }
  }
  Coach.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const coach = await Coach.create({
      username,
      email,
      hashedPassword
    });
    return await Coach.scope('currentUser').findByPk(coach.id);
  };
  return Coach;
  };