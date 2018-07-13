'use strict';

const Controller = require('../core/Controller');
const db = require('../models');

class RecruiterController extends Controller{
    getAll(req, res, next){
        db.Recruiter.findAll(
            {include: [ db.User ]
        }).then((recruiters) => {
            res.status(200).send(recruiters);
        });
    }

    getOne(req, res, next){
        db.Recruiter.findOne({
            where: {
                recruiterId: req.params.idRecruiter
            },
            include: [ db.User ]
        }).then((recruiter) => {
            if(recruiter){
                return res.status(200).send(recruiter);
            }
            return res.status(400).send({
                statusCode: 400,
                error: "Bad Request",
                message: `Can't find Recruiter with id ${req.params.idRecruiter}`
            });
        }).catch(err => {
            console.log(err);
        });
    }
    
    async addRecruiter(req, res, next){
        const isUserExist = await this.findUserByMail(req.query.mail);
        if(isUserExist){
            return next(res.status(409).send({
                statusCode: 409,
                error: "Conflict",
                message: `User with mail ${req.query.mail} already exist`
            }));
        }

        let recruiter = await db.Recruiter.create({
            cv: req.query.cv
        });

        let user = await db.User.create({
            lastname: req.query.lastname,
            firstname: req.query.firstname,
            password: req.query.password,
            mail: req.query.mail,
            phone: req.query.phone,
            description: req.query.description,
            RecruiterRecruiterId: recruiter.recruiterId
        });

        return next(res.send(user));
    }

    findRecruiterById(id){
        return db.Recruiter.findOne({
            where: {
                recruiterId: id
            },
            plain: true
        }).then((recruiter) =>{
            return recruiter;
        }).catch(err => {
            console.log(err);
        });
    }

    async addRecruiterJob(req, res, next){
        const recruiter = await this.findRecruiterById(req.params.idRecruiter);
        if(!recruiter){
            return res.status(400).send({
                statusCode: 400,
                error: "Bad Request",
                message: `Can't find recruiter with id ${req.params.idRecruiter}`
            });
        }
        return db.Job.create({
            jobName: req.query.jobName,
            jobDescription: req.query.jobDescription,
            RecruiterRecruiterId: req.params.idRecruiter
        }).then(job => {
            return res.send(job);
        }).catch(err => {
            console.log(err);
        });
    }

    getRecruiterJobs(req, res, next){
        db.Job.findAll({
            where: {
                RecruiterRecruiterId: req.params.idRecruiter
            }
        }).then((recruiterJobs) => {
            if(recruiterJobs){
                res.status(200).send(recruiterJobs);
            }
            res.status(400);
        }).catch(err => {
            console.log(err);
        });
    }
}

module.exports = new RecruiterController(db);