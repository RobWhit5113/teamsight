'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          parentEmail: 'demo@user.io',
          username: 'DemoSwimmer',
          firstName: 'Swimmy',
          lastName: 'Swimmerson',
          teamId: 1,
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          parentEmail: 'demo2@user.io',
          username: 'DemoSlowSwimmer',
          firstName: 'Sinky',
          lastName: 'Sinkerson',
          teamId: 1,
          hashedPassword: bcrypt.hashSync('password')
        }
        // {
        //   parent_email: faker.internet.email(),
        //   username: 'FakeUser1',
        //   hashedPassword: bcrypt.hashSync(faker.internet.password())
        // },
        // {
        //   parent_email: faker.internet.email(),
        //   username: 'FakeUser2',
        //   hashedPassword: bcrypt.hashSync(faker.internet.password())
        // }
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
