'use strict';

module.exports = (sequelize, DataTypes) => {
const Skill = sequelize.define("Skill", {
    skillId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    skillName: {
        type: DataTypes.STRING
    }
  });

  Skill.associate = (models) => {
    models.Skill.belongsToMany(models.Job, {through: "JobSkill"});
    models.Skill.belongsToMany(models.Candidate, {through: "CandidateSkill"});
  };

  return Skill;
}