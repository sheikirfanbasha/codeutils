var gaussian = require('gaussian');
var distribution = gaussian(0.5, 1);
// Take a random sample using inverse transform sampling method. 
var nums = [];
for(var i = 0; i < 1000; i++){
	var sample = distribution.ppf(Math.random());
	nums.push(sample);	
}
var sum = nums.reduce(function(a, b){
	return a + b;
});

var max = -1;
nums.map(function(a){
	if(max < a){
		max = a;
	}
});
console.log("max = " + max);
console.log("avg = " + (sum / nums.length));
console.log(distribution);