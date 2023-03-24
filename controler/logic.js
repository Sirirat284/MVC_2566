const { Operator } = require('./operator');
const axios = require('axios');
const model = require('./model');
const { response } = require('express');

class Logic {
    constructor(){
        this.admindata = model.adminlogin;
    }
    //user
    insertdataLogic = (res , employee) =>{
        new Operator().insertdataOperator(res , employee)
    }
    showdataLogic = (res) => {
       new Operator().update() 
       new Operator().showdataOperator(res) 
    }

    
    //admin
    loginLogic = (res ,admin) => {
        const user = admin.user
        const password = admin.password
        console.log(this.admindata)
        if (user==this.admindata.user){
            if(password==this.admindata.password){
                return res.status(201).redirect('/admin123/function/editanddelete');
            }
            else
            return res.status(201).render('../view/admin',{response:{notification:'sorry'} });
        }
        else
            return res.status(201).render('../view/admin',{response:{notification:'sorry'} });
    }
    showdatauserforadminLogic = (res ,userid) =>{
        new Operator().showdatauserforadminOperator(res,userid)
    }

    adminshowdataEndpoint =(res) => {
        new Operator().showdataforadminOperator(res);
    }
    editdataforadminLogic = (res , user) => {
        new Operator().editdataforadminOperator(res,user)
    }

}
module.exports = {
    Logic
}