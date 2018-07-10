const Router = require('express').Router;
const userController = require('../controllers/UserController');

const userRouter = new Router();

userRouter.route('/')
    .get(userController.getAll.bind(userController));

    userRouter.route('/:idUser')
    .get(userController.getOne.bind(userController));

module.exports = userRouter;
