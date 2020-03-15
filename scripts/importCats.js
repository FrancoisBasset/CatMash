const fetch = require('node-fetch');

const firebaseController = require('../controllers').FirebaseController;
const firebaseApp = firebaseController.firebaseApp;

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
	const catsCollection = firebaseApp.firestore().collection('cats');

	for (const cat of cats) {
		catsCollection.add({
			url: cat.url,
			votesCount: 0,
			id_user: null
		});
	}
});