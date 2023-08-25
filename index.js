const express = require('express');
const app = express();

const controllers = require('./controllers');
const CatController = controllers.CatController;

app.listen(process.env.PORT || 3000, function() {
	console.log('Listen on 3000');
});

app.use(express.static('./public'));

app.get('/', function(req, res) {
	if (req.query.vote) {
		CatController.incrementVote(req.query.vote);

		res.redirect('/');
		return;
	}

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
	CatController.getCats()
		.then(function(cats) {
			var max = cats[0].votesCount;
			if (max == 0) {
				max = 1;
			}

			res.render('./classement.ejs', {
				cats: cats,
				max: max
			});
		});
});

app.use('/api', require('./api'));