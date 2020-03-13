const express = require('express');
const app = express();

app.listen(80, function() {
	console.log('Listen on 80');
});

app.get('/', function(req, res) {
	const date = new Date();
	const hour = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

	res.render('./vote.ejs', {
		hour: hour
	});
});

app.get('/classement', function(req, res) {
	res.render('./classement.ejs');
});