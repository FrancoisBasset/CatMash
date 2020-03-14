const express = require('express');
const app = express();

const controllers = require('./controllers');
const CatController = controllers.CatController;

app.listen(80, function() {
	console.log('Listen on 80');
});

app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.render('./vote.ejs', {
		cats: CatController.cats
	});
});

app.get('/classement', function(req, res) {
	res.render('./classement.ejs');
});