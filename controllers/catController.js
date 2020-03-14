const fetch = require('node-fetch');

var cats = [];
initCats();

function initCats() {
	getCatsFromRemoteJsonFile()
		.then(function(cats) {
			this.cats = cats;
		});
}

function getCatsFromRemoteJsonFile() {
	return fetch('https://latelier.co/data/cats.json')
		.then(function(fetchRes) {
			return fetchRes.json();
		})
		.then(function(json) {
			return json.images;
		});
}

module.exports = {
	cats
};