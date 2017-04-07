//module.exports={
//    currentUrl: 'http://snk.com'
//}  
 
function construct_func(){
    var nameHolder;
    return{
        name: function(fName ,lName){
            nameHolder = fName +' '+ lName;
        },

        consoleLog:function(){
            console.log(nameHolder);
        }
    }
}

module.exports = construct_func;  