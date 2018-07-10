'use strict';

module.exports = (sequelize, DataTypes) => {
const Level = sequelize.define("Level", {
    levelId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    libelle: {
        type: DataTypes.STRING
    }
  });

  Level.associate = (models) => {
      models.Level.hasMany(models.CandidateSkill);
      models.Level.hasMany(models.JobSkill);
  };   

  return Level;
}