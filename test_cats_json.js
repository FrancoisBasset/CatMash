const fetch = require('node-fetch');

fetch('https://latelier.co/data/cats.json').then(function(res) {
	res.json().then(function(json) {
		for (const image of Object.values(json.images)) {
			console.log(`ID : ${image.id}, URL: ${image.url}`);
		}
	});
});