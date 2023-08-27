const db = require('../db/db');

function select(sql) {
	return new Promise(function(resolve, reject) {
		db.all(sql, function(err, rows) {
			if (err) {
				reject(err);
			} else {
				resolve(rows);
			}
		});
	});
}

function update(sql) {
	return new Promise(function(resolve, reject) {
		db.run(sql, function(err) {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

module.exports = {
	select,
	update
};
