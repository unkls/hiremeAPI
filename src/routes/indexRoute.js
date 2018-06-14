const Router = require('express').Router;
const indexController = require('../controllers/IndexController');

const indexRouter = new Router();
indexRouter.route('/')
    .get(indexController.index);

module.exports = indexRouter;
