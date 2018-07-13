'use strict';

const Controller = require('../core/Controller');
const db = require('../models');

class JobController extends Controller{
    getAll(req, res, next){
        db.Job.findAll(
        ).then((jobs) => {
            res.send(jobs);
        });
    }

    getOne(req, res, next){
        db.Job.findOne({
            where: {
                jobId: req.params.idJob
            }
        }).then((job) => {
            if(job){
                return res.status(200).send(job);
            }
            return res.status(400);
        });
    }

    async addJobSkill(req, res, next){
        let skill = await this.isSkillExist(req.query.skillId);
        let job = await this.isJobExist(req.query.jobId);
        let level = await this.isLevelExist(req.query.levelId);

        if(!skill || !job || !level){
            return res.status(400).send({
                statusCode: 400,
                error: "Bad Request",
                message: `Job Skills need valids skill, job and level id`
            });
        }

        let jobSkill = await this.isJobSkillExist(req.query.jobId, req.query.skillId);
        if(jobSkill){
            return res.status(409).send({
                statusCode: 409,
                error: "Conflict",
                message: `Skill is already attach to this Job`
            });
        }

        db.JobSkill.create({
            JobJobId: req.query.jobId,
            SkillSkillId: req.query.skillId,
            LevelLevelId: req.query.levelId
        }).then(jobSkill => {
            res.send(jobSkill);
        }).catch(err => {
            console.log(err);
        });
    }

    async isJobSkillExist(jobId, skillId){
        let jobSkill = await db.JobSkill.findOne({
            where: {
                JobJobId: jobId,
                SkillSkillId: skillId
            }
        }).then(jobSkill => {
            return jobSkill;
        }).catch(err => {
            console.log(err);
        })
        if(jobSkill){
            return true;
        }
        return false;
    }

    async isJobExist(jobId){
        let job = await db.Job.findOne({
            where:{
                jobId: jobId
            }
        }).then(job => {
            return job;
        }).catch(err => {
            console.log(err);
        });
        if(job){
            return true;
        }
        return false;
    }

    async isSkillExist(skillId){
        let skill = await db.Skill.findOne({
            where:{
                skillId: skillId
            }
        }).then(skill => {
            return skill;
        }).catch(err => {
            console.log(err);
        });
        if(skill){
            return true;
        }
        return false;
    }

    async isLevelExist(levelId){
        let level = await db.Level.findOne({
            where:{
                levelId: levelId
            }
        }).then(level => {
            return level;
        }).catch(err => {
            console.log(err);
        });
        if(level){
            return true;
        }
        return false;
    }


}

module.exports = new JobController(db);