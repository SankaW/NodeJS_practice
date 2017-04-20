var express = require('express');
var app=express();

console.log(__dirname);

app.use('/cssFiles',express.static(__dirname+'/assets'));
app.get('/helloThere', function(req ,res){
    res.send('Hello there, fromexpress !');
});

app.listen(1234 , function(){
    console.log('Listening at Port 1234');
});
  