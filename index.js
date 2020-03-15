const express = require('express');
const app = express();

const controllers = require('./controllers');
const CatController = controllers.CatController;

app.listen(process.env.PORT || 80, function() {
	console.log('Listen on 80');
});

app.use(express.static('./public'));

app.get('/', function(req, res) {
	CatController.getRandomCat()
		.then(function(leftCat) {
			CatController.getRandomCat(leftCat)
				.then(function(rightCat) {
					res.render('./vote.ejs', {
						leftCat: leftCat,
						rightCat: rightCat
					});
				});
		});
});

app.get('/classement', function(req, res) {
	res.render('./classement.ejs');
});