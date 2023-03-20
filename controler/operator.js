const connection = require('../database/connect');
class Operator {

    showInfoOperator = (res) => {
        let sql = `SELECT * FROM employee`
        connection.query(sql,
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    //console.log(data);
                    return res.status(201).render('../view/showInfo.ejs', {
                        response: data
                    });
                }
            }
        )
    }

}
module.exports = {
    Operator
}