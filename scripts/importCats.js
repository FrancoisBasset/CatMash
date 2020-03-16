const fetch = require('node-fetch');
const controllers = require('../controllers');
const sqliteController = controllers.SqliteController;
const db = sqliteController.db;

function getCatsFromRemoteJsonFile() {
	return fetch('https://latelier.co/data/cats.json')
		.then(function(fetchRes) {
			return fetchRes.json();
		})
		.then(function(json) {
			return json.images;
		});
}

getCatsFromRemoteJsonFile().then(function(cats) {
	for (const cat of cats) {
		var url = cat.url;
		
		if (url.startsWith('http://')) {
			url = `https://${url.split('http://')[1]}`;
		}

		db.run(`INSERT INTO CATS(URL) VALUES('${url}')`);
	}
});