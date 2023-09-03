const express = require('express');
const app = express();

const {exec} = require('child_process');
const fs = require('fs');

const distExists = fs.existsSync('./dist');

app.listen(process.env.PORT || 3000, function() {
	console.log('Starting back');
	console.log(`Go to http://localhost:${distExists ? process.env.PORT || 3000 : 5173}`);
});

app.use('/api', require('./routes'));

if (fs.existsSync('./dist')) {
	app.use(express.static('./dist', {
		index: 'index.html'
	}));
} else {
	exec('npm run vite');
	console.log('Starting front');
}
