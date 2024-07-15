const { database } = require("pg/lib/defaults");
const { Model, DataTypes, Sequelize } = require("sequelize");

const FILM_TABLE = "films";

class Films extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: FILM_TABLE,
      modelName: "film",
      timestamps: true,
    };
  }
}

const FilmSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  filmName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
  },
};

module.exports = { FilmSchema, Films };
