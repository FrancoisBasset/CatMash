const express = require('express');
const app = express();

const Cats = require('./managers/cats');

app.listen(process.env.PORT || 3000, function() {
	console.log('Listen on 3000');
});

app.use(express.static('./public'));

app.get('/', function(req, res) {
	if (req.query.vote) {
		Cats.incrementVote(req.query.vote);

		res.redirect('/');
		return;
	}

	Cats.getRandoms().then(function(cats) {
		res.render('./vote.ejs', {
			leftCat: cats[0],
			rightCat: cats[1]
		});
	});
});

app.get('/classement', function(req, res) {
	Cats.getAll().then(function(cats) {
		let max = cats[0].votesCount;
		if (max == 0) {
			max = 1;
		}

		res.render('./classement.ejs', {
			cats: cats,
			max: max
		});
	});
});

app.use('/api', require('./routes'));
