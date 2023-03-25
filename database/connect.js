const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        database: 'mvc_data',
        port: 3306,
        user: 'root',
        password: ''
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    
module.exports = connection;