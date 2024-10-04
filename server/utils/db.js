require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const { database } = keys;

const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { ROLES } = require('../constants');

const setupDB = async () => {
  try {
    // Connect to MongoDB
    mongoose.set('useCreateIndex', true);
    mongoose
      .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
      .then(() =>
        console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`)
      )
      .catch(err => console.log(err));
  } catch (error) {
    return null;
  }
};

async function createAdmin() {
  chalk.red('Creating Admin Account');
  const userExists = await User.findOne({ email: 'admin@mail.com' });

  if (userExists) {
    chalk.green('Admin account already created: admin@mail.com ');
    return;
  }

  const user = new User({
    email: 'admin@mail.com',
    password: 'adminadmin',
    firstName: 'admin',
    lastName: 'admin',
    role: ROLES.Admin
  });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  await user.save();
  chalk.red('Admin account created');
}

module.exports = {
  setupDB,
  createAdmin
};
