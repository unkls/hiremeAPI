const Router = require('express').Router;
const expressJoi = require('express-joi-validator');
const jobSkillValidator = require('../config/validators').jobSkills;
const jobSkillController = require('../controllers/JobSkillController');

const jobSkillRouter = new Router();

jobSkillRouter.route('/')
    .post(
        expressJoi(jobSkillValidator),
        jobSkillController.addJobSkill.bind(jobSkillController)
    );

jobSkillRouter.use(
    (err, req, res, next) => {
        if(err.isBoom){
            return next(res.status(err.output.statusCode).send(err.output.payload));
        }
        return next();
    }
);

module.exports = jobSkillRouter;
