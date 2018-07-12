const Router = require('express').Router;
const expressJoi = require('express-joi-validator');
const recruiterValidator = require('../config/validators').recruiters;
const recruiterController = require('../controllers/RecruiterController');

const recruiterRouter = new Router();

recruiterRouter.route('/')
    .get(recruiterController.getAll.bind(recruiterController));

recruiterRouter.route('/:idRecruiter')
    .get(recruiterController.getOne.bind(recruiterController));

recruiterRouter.route('/')
    .post(
        expressJoi(recruiterValidator),
        recruiterController.addRecruiter.bind(recruiterController)
    );

recruiterRouter.use(
    (err, req, res, next) => {
        if(err.isBoom){
            return next(res.status(err.output.statusCode).send(err.output.payload));
        }
        return next();
    }
);

module.exports = recruiterRouter;
