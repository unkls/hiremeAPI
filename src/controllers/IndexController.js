const Controller = require('../core/Controller');
const db = require('../models');

class IndexController extends Controller{
    index(req, res, next){
        //res.send("Hello index");
        db.User.findAll().then((users) => {
            res.send(users);
        });
    }
}

module.exports = new IndexController();