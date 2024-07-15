const { FilmSchema, Films } = require("./films.model");

function setupMoldels(sequelize) {
  Films.init(FilmSchema, Films.config(sequelize));
}

module.exports = setupMoldels;
