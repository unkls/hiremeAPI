'use strict';

const Controller = require('../core/Controller');
const db = require('../models');

class JobController extends Controller{
    getAll(req, res, next){
        let toInclude = [];
        req.query.hasOwnProperty("skills") ? toInclude.push(db.Skill): '';
        req.query.hasOwnProperty("recruiters") ? toInclude.push(db.Recruiter): '';

        db.Job.findAll({
            include : toInclude
        }).then((jobs) => {
            res.send(jobs);
        });
    }

    getOne(req, res, next){
        let toInclude = [];
        req.query.hasOwnProperty("skills") ? toInclude.push(db.Skill): '';
        req.query.hasOwnProperty("recruiters") ? toInclude.push({
            model: db.Recruiter,
            include: [ db.User ]
        }): '';

        db.Job.findOne({
            where: {
                jobId: req.params.idJob
            },
            include : toInclude
        }).then((job) => {
            if(job){
                return res.status(200).send(job);
            }
            return res.status(400).send({
                statusCode: 400,
                error: "Bad Request",
                message: `Can't find Job with id ${req.params.idJob}`
            });
        });
    }

}

module.exports = new JobController(db);