var fs = require("fs");

var parseToBulkIndex = function(data, dest){
	var samplePayload = { "index" : { "_index" : "fraud", "_type" : "Metric" } }
	var str = "";
	var d = JSON.parse(data);
	console.log(d.length);
	d.map(function(item){
		str += JSON.stringify(samplePayload) + "\n";
		str += JSON.stringify(item) + "\n";

	});
	console.log(str);
	dest = dest + "/fraud_bulk.json";
	fs.writeFile(dest, str, (err) => {
	  if (err) throw err;
	  console.log('The bulk indexed json has been saved to location ' + dest);
	});
}

var run = function(path){
	fs.readFile(path, 'utf8', function (err,data) {
	if (err) {
	    return console.log(err);
	}
	  var dest = path.substr(0, path.lastIndexOf('/'));
	  parseToBulkIndex(data, dest);
	});
}

module.exports={
	run: run
}

