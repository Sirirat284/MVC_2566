const { Logic } = require('../controler/logic.js')
const model = require('./model')

class Endpoint {

    constructor() {
        this.employee = model.employee;
        this.admin = model.admin;
    }

    showInfoEndpoint = (req, res) => {
        new Logic().showInfoLogic(req,res);
    }





    //admin
    checkadminEndpoint =(req ,res) =>{
        // this.admin.name = req.body.username
        // this.admin.password = req.body.password
        // console.log(this.admin)
        new Logic().checkadminLogic(res,this.admin)

    }
    selectusernameEnpoint = (req, res) =>{
        let username = req.params.username
        console.log("ssss")
        new Logic().selectusernameLogic(res, username)
    }

}
module.exports = {
    Endpoint
}
