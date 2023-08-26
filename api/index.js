const express = require('express');
const router = express.Router();

const controllers = require('../controllers');
const CatController = controllers.CatController;

router.get('/cats', function(req, res) {
	CatController.getCats().then(function(cats) {
		res.json(cats);
	});
});

router.get('/vote/:catId', function(req, res) {
	CatController.incrementVote(req.params.catId).then(function(result) {
		res.json(result);
	});
});

router.get('/getRandomCat', function(req, res) {
	CatController.getRandomCat().then(function(randomCat) {
		res.json(randomCat);
	});
});

router.get('/getRandomCat/:catId', function(req, res) {
	CatController.getCat(req.params.catId).then(function(cat) {
		CatController.getRandomCat(cat).then(function(randomCat) {
			res.json(randomCat);
		});
	});
});

module.exports = router;
