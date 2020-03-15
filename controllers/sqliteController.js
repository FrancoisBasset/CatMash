const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('db/catmash.db', function(err) {
	if (err) {
		console.log(err);
	}
});

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

module.exports = {
	db,
	select
};