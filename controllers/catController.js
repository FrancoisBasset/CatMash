const sqliteController = require('./sqliteController');

function getCats() {
	return sqliteController.select('select * from cats');
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

module.exports = {
	getCats,
	getRandomCat,
	getRandomTo
};