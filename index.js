const express = require('express');
const app = express();

app.listen(80, function() {
	console.log('Listen on 80');
});

app.get('/', function(req, res) {
	res.send('Vote !');
});

app.get('/classement', function(req, res) {
	res.send('Classement !');
});