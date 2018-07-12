const Controller = require('../core/Controller');
const db = require('../models');

class UserController extends Controller{
    getAll(req, res, next){
        db.User.findAll().then((users) => {
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

    findUserByMail(mail){
        return db.User.findOne({
            where: {
                mail: mail
            },
            plain: true
        }).then((user) =>{
            return user;
        });
    }
}

module.exports = new UserController();