const { Logic } = require('../controler/logic.js')
const model = require('./model')

class Endpoint {

    constructor() {
        this.user = model.user;
        this.admin = model.admin;
    }

    //user
    insertdataEndpoint = (req, res) => {
        this.user.firstname = req.body.firstname;
        this.user.lastname = req.body.lastname;
        this.user.email= req.body.email;
        this.user.feedback = req.body.comment;
        new Logic().insertdataLogic(res , this.user)
    }
    showdataEndpoint = (req, res) => {
        new Logic().showdataLogic(res)
    }


    //admin
    loginEndpoint = (req, res) => {
        this.admin.user = req.body.username
        this.admin.password = req.body.password
        console.log(this.admin)
        new Logic().loginLogic(res ,this.admin)
    }
    showdatauserforadminEndpoint =(req , res) => {
        var userid = req.params.userid
        new Logic().showdatauserforadminLogic(res , userid)
    }
    adminshowdataEndpoint = (req, res) => {
        new Logic().adminshowdataEndpoint(res)
    }
    editdataforadminEndpoint =(req, res) => {
        this.user.userid = req.params.userid
        this.user.status = req.body.status
        console.log(this.user)
        new Logic().editdataforadminLogic(res , this.user)
    }





}
module.exports = {
    Endpoint
}
