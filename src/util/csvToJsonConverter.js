var fs = require("fs");
var dest = "../../data/"
const csvFilePath= dest + '8K.csv';
const csv=require('csvtojson')
var str = "[ \n"
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object 
    // jsonObj.a ==> 1 or 4 
    str += JSON.stringify(jsonObj) + ",\n";
})
.on('done',(error)=>{
	str = str.substr(0, str.lastIndexOf(","));
	str += " \n]";
	fs.writeFile(dest + "8K.json", str, (err) => {
	  if (err) throw err;
	  console.log('The 8K json has been saved to location ' + dest);
	});
    console.log('end')
})