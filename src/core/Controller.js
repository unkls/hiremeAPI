'use strict';

class Controller{
    constructor(model){
        this.model = model;
    }

    /*getAll(req, res, next){
        this.model.findAll().then((candidates) => {
            res.send(candidates);
        });
    }

    getOne(req, res, next){
        this.model.findAll({
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
    }*/
}

module.exports = Controller;