const Controller = require('../core/Controller');

class IndexController extends Controller{
    index(req, res, next){
        res.send("Hello index");
    }
}

module.exports = new IndexController();