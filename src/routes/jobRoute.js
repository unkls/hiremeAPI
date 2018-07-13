const Router = require('express').Router;
const expressJoi = require('express-joi-validator');
const jobValidator = require('../config/validators').jobs;
const jobController = require('../controllers/JobController');

const jobRouter = new Router();

jobRouter.route('/')
    .get(jobController.getAll.bind(jobController));

jobRouter.route('/:idJob')
    .get(jobController.getOne.bind(jobController));

jobRouter.use(
    (err, req, res, next) => {
        if(err.isBoom){
            return next(res.status(err.output.statusCode).send(err.output.payload));
        }
        return next();
    }
);

module.exports = jobRouter;
