const { Logic } = require('../controler/logic.js')
const model = require('./model')

class Endpoint {

    constructor() {
        this.user = model.user;
        this.user_chat = model.user_chat;
    }

    //user
    registerEndpoint = (req , res) => {
        this.user.username = req.body.username
        this.user.password = req.body.passwords
        new Logic().registerLogic(res , this.user)

    }
    loginEndpoint = (req , res) =>{
        this.user.username = req.body.username
        this.user.password = req.body.password
        new Logic().loginLogic(res , this.user)
    }
    chatEndpoint = (req , res) =>{
        this.user_chat.userid = req.params.usersid
        this.user_chat.chat_receive = req.body.chat_receive
        new Logic().insertcahtLogic(res, this.user_chat)
    }
    
}
module.exports = {
    Endpoint
}
