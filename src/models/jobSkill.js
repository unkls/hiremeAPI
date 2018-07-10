'use strict';

module.exports = (sequelize, DataTypes) => {
const JobSkill = sequelize.define("JobSkill", {
    jobSkillId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
  });

  JobSkill.associate = (models) => {
    models.JobSkill.belongsTo(models.Level);
  };

  return JobSkill;
}