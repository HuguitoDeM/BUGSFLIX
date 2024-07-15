const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setupMoldels = require("./../db/models");

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    port: config.port,
    dialect: "postgresql",
  }
);

sequelize.sync();
setupMoldels(sequelize);

module.exports = sequelize;
