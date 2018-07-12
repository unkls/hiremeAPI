const Router = require('express').Router;
const expressJoi = require('express-joi-validator');
const candidValidator = require('../config/validators').candidates;
const candidateController = require('../controllers/CandidateController');

const candidateRouter = new Router();

candidateRouter.route('/')
    .get(candidateController.getAll.bind(candidateController));

candidateRouter.route('/:idCandidate')
    .get(candidateController.getOne.bind(candidateController));

candidateRouter.route('/')
    .post(
        expressJoi(candidValidator),
        candidateController.addCandidate.bind(candidateController)
    );

candidateRouter.use(
    (err, req, res, next) => {
        if(err.isBoom){
            return next(res.status(err.output.statusCode).send(err.output.payload));
        }
        return next();
    }
);

module.exports = candidateRouter;
