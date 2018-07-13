'use strict';

class Controller{
    constructor(model){
        this.model = model;
    }

    findUserByMail(mail){
        return this.model.User.findOne({
            where: {
                mail: mail
            },
            plain: true
        }).then((user) =>{
            return user;
        });
    }
}

module.exports = Controller;