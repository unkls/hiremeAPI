'use strict';

module.exports = (sequelize, DataTypes) => {
const RecruiterJob = sequelize.define("RecruiterJob", {
    recruiterJobId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
  });

  RecruiterJob.associate = (models) => {
  };

  return RecruiterJob;
}