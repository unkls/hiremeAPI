'use strict';

const Controller = require('../core/Controller');
const db = require('../models');

class CandidateController extends Controller{
    getAll(req, res, next){
        db.Candidate.findAll(
            {include: [ db.User ]
        }).then((candidates) => {
            res.status(200).send(candidates);
        });
    }

    getOne(req, res, next){
        db.Candidate.findOne({
            where: {
                candidateId: req.params.idCandidate
            },
            include: [ db.User ]
        }).then((candidate) => {
            if(candidate){
                res.status(200).send(candidate);
            }
            res.status(400).send(candidate);
        }).catch(err => {
            console.log(err);
        });
    }
    
    async addCandidate(req, res, next){
        const isUserExist = await this.findUserByMail(req.query.mail);
        if(isUserExist){
            return res.status(409).send({
                statusCode: 409,
                error: "Conflict",
                message: `User with mail ${req.query.mail} already exist`
            });
        }

        let candidate = await db.Candidate.create({
            cv: req.query.cv
        })

        let user = await db.User.create({
            lastname: req.query.lastname,
            firstname: req.query.firstname,
            password: req.query.password,
            mail: req.query.mail,
            phone: req.query.phone,
            description: req.query.description,
            CandidateCandidateId: candidate.candidateId
        });

        return res.send(user);
    }
}

module.exports = new CandidateController(db);