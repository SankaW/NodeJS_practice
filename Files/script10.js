// how to read files

var fs = require('fs');

console.log ('ExecutednBefore File Reading.');

fs.readFile('./files/file','utf8',function(error,data){
    console.log(data);
});

console.log('Executed A File Reading,probably.');