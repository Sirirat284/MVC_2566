const { Operator } = require('./operator');
const axios = require('axios');
const model = require('./model');
const { response } = require('express');

class Logic {
    constructor(){
        this.userlogin = model.userlogin;
    }
    //user
    registerLogic = (res , users) =>{
        new Operator().resgisterOperator(res , users);
    }
    loginLogic = (res ,users) => {
        new Operator().loginOperator(res ,users)
    }
    insertcahtLogic = (res , user_chat) => { 
        new Operator().insertcahtOperator(res , user_chat)
    }

}
module.exports = {
    Logic
}