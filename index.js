const express = require('express');
const app = express();

const controllers = require('./controllers');
const CatController = controllers.CatController;

app.listen(process.env.PORT || 80, function() {
	console.log('Listen on 80');
});

app.use(express.static('./public'));

app.get('/', function(req, res) {
	if (req.query.vote) {
		console.log(req.query.vote);
		CatController.incrementVote(req.query.vote);

		res.redirect('/');
		return;
	}

	CatController.getRandomCat()
		.then(function(leftCat) {
			console.log(leftCat);
			
			CatController.getRandomCat(leftCat)
				.then(function(rightCat) {
					console.log(rightCat);
					
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