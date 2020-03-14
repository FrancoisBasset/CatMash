const firebaseApp = require('../firestore');
const catsCollection = firebaseApp.firestore().collection('cats');

function getCats() {
	return catsCollection.get()
		.then(function(catsRes) {
			var cats = [];

			for (var catRes of catsRes.docs) {
				var cat = catRes.data();
				cat.id = catRes.id;

				cats.push(cat);
			}

			return cats;
		});
}

module.exports = {
	getCats
};