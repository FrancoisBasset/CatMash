const fetch = require('node-fetch');
const express = require('express');
const app = express();

app.listen(80, function() {
	console.log('Listen on 80');
});

app.use(express.static('./public'));

app.get('/', function(req, res) {
	fetch('https://latelier.co/data/cats.json').then(function(fetchRes) {
		fetchRes.json().then(function(json) {
			res.render('./vote.ejs', {
				cats: json.images
			});
		});
	});
});

app.get('/classement', function(req, res) {
	res.render('./classement.ejs');
});