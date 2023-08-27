const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;

const chai = require('chai');
chai.should();

const Cats = require('../managers/cats');

describe('Cats', function() {

	describe('getRandoms()', function() {
		this.beforeAll(async function() {
			this.randomCats = await Cats.getRandoms();

			this.cats = await Cats.getAll();
		});

		it('should not be undefined', function() {
			this.randomCats[0].should.not.be.undefined;
			this.randomCats[1].should.not.be.undefined;
		});

		it('should not be null', function() {
			this.randomCats[0].should.not.be.null;
			this.randomCats[1].should.not.be.null;
		});
		
		it('should be an object', function() {
			this.randomCats[0].should.be.an('object');
			this.randomCats[1].should.be.an('object');
		});

		it('should ownProperty id + url + votesCount', function() {
			this.randomCats[0].should.ownProperty('id');
			this.randomCats[0].should.ownProperty('url');
			this.randomCats[0].should.ownProperty('votesCount');
		});

		it('random should gte 0 lte cats length', function() {
			for (let i = 0; i < 1000; i++) {
				const random = Cats.getRandomTo(this.cats.length - 1);
				
				random.should.gte(0).lte(this.cats.length);
			}
		});

		it('it should be another cat after second call', function() {
			this.randomCats[0].id.should.not.be.equals(this.randomCats[1].id);
		});
	});

});
