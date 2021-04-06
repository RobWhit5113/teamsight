'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'demo@user.io',
          username: 'DemoSwimmer',
          firstName: 'Swimmy',
          lastName: 'Swimmerson',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo2@user.io',
          username: 'DemoSlowSwimmer',
          firstName: 'Sinky',
          lastName: 'Sinkerson',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo3@user.io',
          username: 'DemoBreastroker',
          firstName: 'Adam',
          lastName: 'Peaty',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo4@user.io',
          username: 'DemoBackstroker',
          firstName: 'Ryan',
          lastName: 'Murphy',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'coachtrent@swim.io',
          username: 'coachtrent',
          firstName: 'Trent',
          lastName: 'Jackson',
          teamId: 1,
          isCoach: true,
          hashedPassword: bcrypt.hashSync('password')
        }
        
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      {
        username: { [Op.in]: ['Demo-lition'] }
      },
      {}
    );
  }
};
