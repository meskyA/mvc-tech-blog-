const sequelize = require('../../config/connection');
const seedUser= require('./userData');
const seedPost = require('./postData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedDatabase();

const sequelize = require('../config/config');
const seedUser = require('./userData');
const seedPost = require('./postData');

