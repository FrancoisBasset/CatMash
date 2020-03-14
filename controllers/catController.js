const fetch = require('node-fetch');

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
	getCatsFromRemoteJsonFile
};