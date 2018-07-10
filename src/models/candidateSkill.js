'use strict';

module.exports = (sequelize, DataTypes) => {
const CandidateSkill = sequelize.define("CandidateSkill", {
    candidateSkillId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
  });

  CandidateSkill.associate = (models) => {
    models.CandidateSkill.belongsTo(models.Level)
  };

  return CandidateSkill;
}