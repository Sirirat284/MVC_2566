const { Operator } = require('./operator');
const axios = require('axios');

class Logic {

    showInfoLogic = (req,res) => {
        new Operator().showInfoOperator(req,res);
    }









    //admin
    checkadminLogic = async(res,admin) => {
        console.log(admin.name)
        var uri =  axios.get(`http://localhost:3000/username`)
        var URLEncode = encodeURI(uri); 
        let response = await axios.get(URLEncode)
        var username = response.data.response[0].useradmin
                
    }


    selectusernameLogic = (res,username) => {
        new Operator().selectusernameOperator(res , username);
    }
}
module.exports = {
    Logic
}