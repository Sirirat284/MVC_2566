const { response } = require('express')
const connection = require('../database/connect');
const model = require('./model');
class Operator {
    //user
    resgisterOperator = (res , users) =>{
        let sql =`insert into users (username,passwords)
        values(?,?);`
        connection.query(
            sql, [
                users.username,
                users.password
            ],
            function (err) {
                if (err) {
                    console.log(err)
                    return res.status(201).redirect('/');
                }
                else {
                    let sql = `select * from users
                    where username = ?`
                    connection.query(
                        sql,[users.username],
                    function (err, data) {
                        if (err) {
                            return "error"
                        }
                        else {
                            return res.status(201).render('../view/chatwelcome',{response:{data , welcome:' “Welcome' , to:'to ChatCSIfElse, the best chat AI in the world! What can I helpyou?”'}});
                        }
                    }
                    )
                }
            }
        )
    }
    loginOperator =(res ,users) => {
        let sql = `select * from users
        where username = ?`
        connection.query(
            sql,[users.username],
            function (err, data) {
                if (err) {
                        return "error"
                    }
                else {
                    if (users.username==data[0].username){
                        if(users.password==data[0].passwords){
                            return res.status(201).render('../view/chatwelcome',{response:{data , welcome:'“Welcome again' , to:'! Anything else today?”'}});
                        }
                    else
                        return res.status(201).render('../view/login',{response:{notification:'sorry please check your username and password'} });
                    }
                else
                    return res.status(201).render('../view/login',{response:{notification:'sorry please check your username and password'} });
                }
            }
        )
    } 

    insertcahtOperator = (res , user_chat) => {
        let sql =`insert into chat (usersid , chat_receive , chat_send)
            values(?,?,'-');`
        connection.query(
            sql, [
                user_chat.userid,
                user_chat.chat_receive
            ],
            function (err) {
                if (err) {
                    console.log(err)
                    return res.status(201).redirect('/');
                }
                else {
                    let sql = `SELECT *
                    FROM chat
                    CROSS JOIN users ON chat.usersid=users.usersid 
                    where chat.usersid =?;`
                    connection.query(
                        sql,[user_chat.userid],
                    function (err, data) {
                        if (err) {
                            return "error"
                        }
                        else {
                            return res.status(201).render('../view/chatmain',{response:data });
                        }
                    }
                    )
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