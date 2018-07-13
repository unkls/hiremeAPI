const Router = require('express').Router;
const expressJoi = require('express-joi-validator');
const skillValidator = require('../config/validators').skills;
const skillController = require('../controllers/SkillController');

const skillRouter = new Router();

skillRouter.route('/')
    .get(skillController.getAll.bind(skillController));

skillRouter.route('/')
    .post(
        expressJoi(skillValidator),
        skillController.addSkill.bind(skillController)
    );

skillRouter.route('/:idSkill')
    .get(skillController.getOne.bind(skillController));


module.exports = skillRouter;
