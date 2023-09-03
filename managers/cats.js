const Sqlite = require('./sqlite');

function getAll() {
	return Sqlite.select('SELECT * FROM cats ORDER BY votesCount DESC');
}

function getById(id) {
	return Sqlite.select(`SELECT * FROM cats WHERE id = ${id}`);
}

function getRandoms() {
	return getAll().then(function(cats) {
		const index = getRandomTo(cats.length - 1);
		let index2 = index;

		while (index === index2) {
			index2 = getRandomTo(cats.length - 1);
		}
		
		return [cats[index], cats[index2]];
	});
}

const getRandomTo = to => Math.floor(Math.random() * to);

function incrementVote(catId) {
	return getById(catId).then(function(cat) {
		if (cat.length === 0) {
			return {
				success: false,
				err: 'No cat with this id'
			};
		}			

		cat = cat[0];

		const newVotesCount = cat.votesCount + 1;

		const update = `update cats set votesCount = ${newVotesCount} where id = ${catId}`;

		return Sqlite.update(update).then(function(err) {
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
	getAll,
	getRandoms,
	getRandomTo,
	incrementVote
};
