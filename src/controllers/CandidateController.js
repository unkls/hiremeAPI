'use strict';

const Controller = require('../core/Controller');
const db = require('../models');

class CandidateController extends Controller{
    getAll(req, res, next){
        //res.send("Hello index");
        db.Candidate.findAll().then((candidates) => {
            res.send(candidates);
        });
    }

    getOne(req, res, next){
        db.Candidate.findAll({
            where: {
                candidateId: req.params.idCandidate
            }
        }).then((candidate) => {
            if(candidate){
                res.status(200);
                res.send(candidate);
            }
            res.status(400);
        });
    }
}
module.exports = new CandidateController(db.Candidate);