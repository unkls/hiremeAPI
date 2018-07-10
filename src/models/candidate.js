'use strict';

module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define("Candidate", {
    candidateId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cv: {
        type: DataTypes.STRING
    }
  });

  Candidate.associate = (models) => {
    models.Candidate.hasOne(models.User)
    models.Candidate.belongsToMany(models.Skill, {through: "CandidateSkill"});
    models.Candidate.belongsToMany(models.Job, {through: "CandidateJob"});
  };

  return Candidate;
};