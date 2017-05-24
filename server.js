var express = require('express');
var app = express();
var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'snklions',
        server: 'localhost', 
        database: 'SchoolDB' 
    };

app.get('/', function (req, res) {
   
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from Student', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
            sql.close();    
        });
    });
});

app.get('/save', function (req, res) {
  
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        var sqlinsert = "INSERT INTO Student (StudentName) VALUES ('"+req.query.studentname+"')";
        request.query(sqlinsert, function (err) {
            if (err) console.log(err)
            res.send("Student saved !");
            sql.close();    
        });           
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});