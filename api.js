var express = require('express');
var bodyParser = require('body-parser');
var students = require("./students.js");
var app = express();

var lastIndex = students.length;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/', function (req, res) { //route
  res.send('Hello World!');
});

app.post('/saveStudent',function(req,res){
  var student = req.body;
  lastIndex = lastIndex + 1;
  student.id = lastIndex;
  students.push(student);
  console.log(students);
  res.send("student saved!");
});

app.get('/getStudent',function(req,res){
  var student
  for(var i=0;i<students.length; i++){
    if (req.query.id== students[i].id){
      student = students[i];
      break;
    }
  }
  if(!student){
    res.send("student is not found");
  }else{
    res.send(student);
  }  
});

app.get('/deleteStudent',function(req,res){
  var student
  for(var i=0;i<students.length; i++){
    if (req.query.id== students[i].id){
      student = students[i];
      console.log(student);
      students.splice(i, 1);
      break;
    }
  }
  if(!student){
    res.send("student is not found");
  }else{
    res.send("student deleted !");
  }  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




//req.query    http://localhost:3000/deleteStudent?id=2
//req.body
//req.header