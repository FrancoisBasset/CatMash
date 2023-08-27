const db = require('./db');

function getCatsFromRemoteJsonFile() {
	return fetch('https://latelier.co/data/cats.json').then(function(res) {
		return res.json().then(function(json) {
			return json.images;
		});
	});
}

getCatsFromRemoteJsonFile().then(function(cats) {
	const urls = cats.map(i => '("' + i.url + '")').join(',');

	db.run('INSERT INTO CATS(URL) VALUES ' + urls);
});
