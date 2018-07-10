'use strict';

module.exports = (sequelize, DataTypes) => {
const CandidateJob = sequelize.define("CandidateJob", {
    candidateJobId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
  });

  CandidateJob.associate = (models) => {
  };

  return CandidateJob;
}