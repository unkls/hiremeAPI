'use strict';

module.exports = (sequelize, DataTypes) => {
  const Recruiter = sequelize.define("Recruiter", {
    recruiterId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company: {
      type: DataTypes.STRING
    }
  });

  Recruiter.associate = (models) => {
    models.Recruiter.hasOne(models.User);
  };

  return Recruiter;
};