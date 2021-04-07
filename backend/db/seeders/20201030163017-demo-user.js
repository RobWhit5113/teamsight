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
          email: 'demo5@user.io',
          username: 'DemoBackstroker',
          firstName: 'Katie',
          lastName: 'Ledecky',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo6@user.io',
          username: 'DemoBackstroker',
          firstName: 'Katie',
          lastName: 'Hoff',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo7@user.io',
          username: 'DemoBackstroker',
          firstName: 'Michal',
          lastName: 'Phelps',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo8@user.io',
          username: 'DemoBackstroker',
          firstName: 'Ryan',
          lastName: 'Lochte',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo9@user.io',
          username: 'DemoBackstroker',
          firstName: 'Reed',
          lastName: 'Fujan',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo10@user.io',
          username: 'DemoBackstroker',
          firstName: 'Matt',
          lastName: 'Grevers',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo11@user.io',
          username: 'DemoBackstroker',
          firstName: 'Caleb',
          lastName: 'Dressel',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo12@user.io',
          username: 'DemoBackstroker',
          firstName: 'Aaron',
          lastName: 'Piersol',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo13@user.io',
          username: 'DemoBackstroker',
          firstName: 'Simone',
          lastName: 'Manuel',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo14@user.io',
          username: 'DemoBackstroker',
          firstName: 'Duncan',
          lastName: 'Scott',
          teamId: 1,
          isCoach: false,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'demo15@user.io',
          username: 'DemoBackstroker',
          firstName: 'Mark',
          lastName: 'Spitz',
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
