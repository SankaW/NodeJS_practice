var express = require('express');
var app=express();

app.use('/cssFiles',express.static(__dirname)+"/")
app.get('/helloThere', function(req ,res){
    res.send('Hello there, fromexpress !');
});

app.listen(1234 , function(){
    console.log('Listening at Port 1234');
});
