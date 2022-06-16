const sequelize = require('../config/connection');
const seedBlog = require('./blogData');
const seedCooments = require('./commentsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  await seedCooments();

  process.exit(0);
};

seedAll();
