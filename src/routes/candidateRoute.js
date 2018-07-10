const Router = require('express').Router;
const candidateController = require('../controllers/CandidateController');

const candidateRouter = new Router();

candidateRouter.route('/')
    .get(candidateController.getAll.bind(candidateController));

candidateRouter.route('/:idCandidate')
    .get(candidateController.getOne.bind(candidateController));

module.exports = candidateRouter;
