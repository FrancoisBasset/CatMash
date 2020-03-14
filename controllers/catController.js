const firebaseApp = require('../firestore');
const catsCollection = firebaseApp.firestore().collection('cats');

function getCats() {
	return catsCollection.get()
		.then(function(cats) {
			return cats.docs.map(c => c.data());
		});
}

module.exports = {
	getCats
};