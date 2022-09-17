const { User } = require('../models');

const userData = [
  {
    username: 'ashtonmoore',
    password: 'test1'
    
  },
  {
    username: 'ashmoore',
    password: 'test2'
  },
  {
    username: 'am',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;