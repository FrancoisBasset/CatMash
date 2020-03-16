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
	console.log(cats);
	
	for (const cat of cats) {
		db.run(`INSERT INTO CATS(URL) VALUES('${cat.url}')`);
	}
});