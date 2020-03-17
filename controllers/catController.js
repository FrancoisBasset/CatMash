const sqliteController = require('./sqliteController');

function getCats() {
	return sqliteController.select('select * from cats order by votesCount desc');
}

function getCat(catId) {
	return sqliteController.select(`select * from cats where id = ${catId}`);
}

function getRandomCat(firstCat) {
	return getCats()
		.then(function(cats) {
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
			cat = cat[0];

			const newVotesCount = cat.votesCount + 1;

			sqliteController.update(`update cats set votesCount = ${newVotesCount} where id = ${catId}`)
				.then(function(err) {
					if (err) {
						console.log(err);
					}
				});
		});
}

module.exports = {
	getCats,
	getRandomCat,
	getRandomTo,
	incrementVote
};