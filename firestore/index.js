const firebase = require('firebase-admin');

var app = firebase.initializeApp({
	credential: firebase.credential.applicationDefault(),
	databaseURL: 'https://catmash-6c755.firebaseio.com'
});

module.exports = app;