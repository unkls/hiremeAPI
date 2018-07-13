'use strict';

const Controller = require('../core/Controller');
const db = require('../models');

class SkillController extends Controller{
    getAll(req, res, next){
        db.Skill.findAll(
        ).then((skills) => {
            res.send(skills);
        });
    }

    getOne(req, res, next){
        db.Skill.findOne({
            where: {
                skillId: req.params.idSkill
            }
        }).then((skill) => {
            if(skill){
                res.status(200).send(skill);
            }
            res.status(400);
        });
    }

    async addSkill(req, res, next){
        let skill = await this.isSkillExist(req.query.skillName);
        if(skill){
            return res.status(409).send({
                statusCode: 409,
                error: "Conflict",
                message: `Skill already exist`
            });
        }

        db.Skill.create({
            skillName: req.query.skillName
        }).then(skill => {
            res.send(skill);
        }).catch(err => {
            console.log(err);
        });
    }

    async isSkillExist(name){
        let skill = await db.Skill.findOne({
            where:{
                skillName: name
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
}

module.exports = new SkillController(db);