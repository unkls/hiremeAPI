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
            include: [ User ]
        }).then((recruiter) => {
            if(recruiter){
                res.status(200).send(recruiter);
            }
            res.status(400);
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
            RecruiterRecruiterId: recruiter.recruiterId
        });

        return next(res.send(user));
    }
}

module.exports = new RecruiterController(db);