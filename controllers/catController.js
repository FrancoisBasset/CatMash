const sqliteController = require('./sqliteController');

function getCats() {
	return sqliteController.select('SELECT * FROM cats ORDER BY votesCount DESC');
}

function getCat(catId) {
	return sqliteController.select(`SELECT * FROM cats WHERE id = ${catId}`);
}

function getRandomCat(firstCat) {
	return getCats().then(function(cats) {
		const count = cats.length;
		const index = getRandomTo(count - 1);
		
		const cat = cats[index];

		if (firstCat && firstCat.id == cat.id) {
			const newIndex = index + 1;

			if (newIndex == cats.length) {
				return cats[index - 1];
			}
			
			return cats[newIndex];
		}
		
		return cat;
	});
}

function getRandomTo(to) {
	to--;
	return Math.floor(Math.random() * to);
}

function incrementVote(catId) {
	return getCat(catId)
		.then(function(cat) {
			if (cat.length == 0) {
				return {
					success: false,
					err: 'No cat with this id'
				};
			}			

			cat = cat[0];

			const newVotesCount = cat.votesCount + 1;

			return sqliteController.update(`update cats set votesCount = ${newVotesCount} where id = ${catId}`)
				.then(function(err) {
					if (err) {
						return {
							success: false,
							err: err
						};
					} else {
						return {
							success: true
						};
					}
				});
		});
}

module.exports = {
	getCats,
	getRandomCat,
	getRandomTo,
	incrementVote,
	getCat
};
