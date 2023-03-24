const { response } = require('express')
const connection = require('../database/connect');
class Operator {
    //user
    insertdataOperator=(res , user ) =>{
        let sql =`insert into users (firstname,lastname,email,feedback,status)
        values(?,?,?,?,'open');`
        connection.query(
            sql, [
                user.firstname, 
                user.lastname, 
                user.email, 
                user.feedback
        ],
            function (err) {
                if (err) {
                    console.log(err)
                    return res.status(201).redirect('/');
                }
                else {
                    return res.status(201).redirect('/');
                }
            }
        )
    }
    showdataOperator=(res) => {
        let sql = `select userid , firstname ,lastname, email, feedback from users
                    where status = 'open';`
        connection.query(
            sql,
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.status(201).render('../view/page_showdata', {
                        response: data
                    });
                }
            }
        )
    }
    update = () =>{
        let sql = `update users 
                   set status = 'close'
                   where timestamp  < date_sub(now(), interval 1 week);`
        connection.query(
            sql,
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    // return res.status(201).render('../view/page_showdata', {
                    //     response: data
                    // });
                }
            }
        )
    }
    









    //admin
    showdataforadminOperator=(res) => {
        let sql = `select * from users`
        connection.query(
            sql,
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.status(201).render('../view/adminshowdata.ejs', {
                        response: data
                    });
                }
            }
        )

    }
    showdatauserforadminOperator=(res,userid) => {
        let sql = `select * from users
                    where userid = ?`
        connection.query(
            sql,[userid],
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(data)
                    return res.status(201).render('../view/adminedituser.ejs', {
                        response: data
                    });
                }
            }
        )

    }
    editdataforadminOperator=(res,user) => {
        let sql = `UPDATE users
                    SET status = ? , timestamp = CURRENT_TIMESTAMP
                    WHERE userid = ? ;`
        connection.query(
            sql,[user.status,
                user.userid],
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.status(201).redirect('/admin123/function/editanddelete')
                }
            }
        )
    }



}

module.exports = {
    Operator
}