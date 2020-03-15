const firebase = require('firebase-admin');

const serviceAccount = require('../catmash.json');

const firebaseApp = firebase.initializeApp({
	credential: firebase.credential.cert(serviceAccount),
	databaseURL: 'https://catmash-5ccf8.firebaseio.com'
});

module.exports = {
	firebaseApp
};