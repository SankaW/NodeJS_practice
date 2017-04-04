var methods ={};
var output = 200;

methods.sumNumbers = function(a,b){
	output = a+b;
	return output;
};

methods.updateServer= function(){
	console.log('Important function');
};

methods.eatCookies = function(){
	console.log('ice cream');
};

methods.node = function(){
	console.log('NodeJS, is awsome');
};

exports.data = methods;
exports.output = output;