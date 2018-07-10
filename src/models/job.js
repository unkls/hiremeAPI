'use strict';

module.exports = (sequelize, DataTypes) => {
const Job = sequelize.define("Job", {
    jobId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    jobName: {
        type: DataTypes.STRING
    },
    jobDescription: {
        type: DataTypes.STRING
    }
  });

  Job.associate = (models) => {
    models.Job.belongsToMany(models.Skill, {through: "JobSkill"});
    models.Job.belongsToMany(models.Candidate, {through: "CandidateJob"});
    models.Job.belongsToMany(models.Recruiter, {through: "RecruiterJob"});
  };
  
  return Job;
}