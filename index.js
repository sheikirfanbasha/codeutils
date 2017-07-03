const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
var jsTobulkParser = require('./src/util/jsonToBulkIndexer')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('hello');
});

app.get('/service/es/jsontobulkindex', (req, res) => {
	jsTobulkParser.run("/Users/irfan/Personal/Project/codeutils/data/paysim.json");
	res.send("performing");
});

app.listen(3100, (err) => {
	console.log('Server started on 3100')
});