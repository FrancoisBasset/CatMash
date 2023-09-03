const db = require('./db');

for (let i = 0; i < 100; i++) {
	fetch('https://cataas.com/cat').then(function(res) {
		res.arrayBuffer().then(buffer => {
			const image = 'data:image/jpeg;base64,' + Buffer.from(buffer, 'base64').toString('base64');

			if (!image.includes('PGh0bWw')) {
				db.run('INSERT INTO CATS(IMAGE) VALUES ("' + image + '")', () => {});
			}
		});
	});
}
