const express = require('express');
const app = express();

app.listen(80, function() {
	console.log('Listen on 80');
});

app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.render('./vote.ejs');
});

app.get('/classement', function(req, res) {
	res.render('./classement.ejs');
});