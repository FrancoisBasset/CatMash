const db = require('./db');

function getCatsFromRemoteJsonFile() {
	return fetch('https://latelier.co/data/cats.json').then(function(res) {
		return res.json();
	}).then(function(json) {
		return json.images;
	});
}

getCatsFromRemoteJsonFile().then(function(cats) {
	for (const cat of cats) {
		let url = cat.url;
		
		if (url.startsWith('http://')) {
			url = `https://${url.split('http://')[1]}`;
		}

		db.run(`INSERT INTO CATS(URL) VALUES('${url}')`);
	}
});
