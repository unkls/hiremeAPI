const Controller = require('../core/Controller');
const db = require('../models');

class UserController extends Controller{
    getAll(req, res, next){
        db.User.findAll().then((users) => {
            console.log(users);
            res.send(users);
        });
    }

    getOne(req, res, next){
        db.User.findAll({
            where: {
                userId: req.params.idUser
            }
        }).then((user) => {
            if(user){
                res.status(200);
                res.send(user);
            }
            res.status(400);
        });
    }
}

module.exports = new UserController();