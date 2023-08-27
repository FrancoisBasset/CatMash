const router = require('express').Router();

const Cats = require('../managers/cats');

router.get('/', function(req, res) {
	Cats.getAll().then(function(cats) {
		res.json(cats);
	});
});

router.get('/randoms', function(req, res) {
	Cats.getRandoms().then(function(randomCat) {
		res.json(randomCat);
	});
});

router.post('/vote/:catId', function(req, res) {
	Cats.incrementVote(req.params.catId).then(function(result) {
		res.json(result);
	});
});

module.exports = router;
