require("dotenv").config();
const chalk = require("chalk");
const mongoose = require("mongoose");

const keys = require("../config/keys");
const { database } = keys;

const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { ROLES } = require("../constants");

const setupDB = async () => {
  try {
    // Connect to MongoDB
    mongoose
      .connect(database.url)
      .then(() =>
        console.log(`${chalk.green("✓")} ${chalk.blue("MongoDB Connected!")}`),
      )
  } catch (error) {
    return null;
  }
};

mongoose.connection.on("error", (error) => {
  console.log(
    `${chalk.red("X")} ${chalk.blue("failed to connect to database!")}`,
  );
});

async function createAdmin() {
  chalk.red("Creating Admin Account");
  const userExists = await User.findOne({
    email: "maisondesalgues.tn@gmail.com",
  });

  if (userExists) {
    chalk.green("Admin account already created: maisondesalgues.tn@gmail.com");
    return;
  }

  const user = new User({
    email: "maisondesalgues.tn@gmail.com",
    password: "123456",
    firstName: "admin",
    lastName: "admin",
    role: ROLES.Admin,
  });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  await user.save();
  chalk.red("Admin account created");
}

module.exports = {
  setupDB,
  createAdmin,
};
