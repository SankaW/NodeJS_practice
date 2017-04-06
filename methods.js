var methods= module.exports ={};
var output = 200;

module.exports.sumNumbers = function(a,b){
	output = a+b;
	return output;
};

module.exports.updateServer= function(){
	console.log('Important function');
};

module.exports.eatCookies = function(){
	console.log('ice cream');
};

module.exports.node = function(){
	console.log('NodeJS, is awsome');
};

module.exports.data = methods;
module.exports.output = output;