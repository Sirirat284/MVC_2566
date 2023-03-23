const connection = require('../database/connect');
class Operator {

    showInfoOperator = (req,res) => {
        let sql = `SELECT * FROM employee`
        connection.query(sql,
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    //console.log(data);
                    return res.status(201).render('..view/showInfo.ejs', {
                        response: data
                    });
                }
            }
        )
    }










    //admin
    selectusernameOperator = (res,usermane) => {
        let sql = `SELECT useradmin FROM admin`
        connection.query(sql ,
            function (err, data){
                if(err)
                    console.log(err)
                else{
                    console.log(data)
                    return res.status(201).send({response: data})
                }

            })
    }

}
module.exports = {
    Operator
}