const express = require('express');
const app = express();

const controllers = require('./controllers');
const CatController = controllers.CatController;

app.listen(80, function() {
	console.log('Listen on 80');
});

app.use(express.static('./public'));

app.get('/', function(req, res) {
	CatController.getCats().then(function(cats) {
		var leftCat = cats[0];
		var rightCat = cats[1];

		res.render('./vote.ejs', {
			leftCat: leftCat,
			rightCat: rightCat
		});
	});
});

app.get('/classement', function(req, res) {
	res.render('./classement.ejs');
});