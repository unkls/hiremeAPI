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
                res.status(200).send(job);
            }
            res.status(400);
        });
    }

    addJobSkills(req, res, next){
        
    }
}

module.exports = new JobController(db);