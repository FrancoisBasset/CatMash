const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;

const chai = require('chai');
chai.should();

const CatController = require('../controllers').CatController;

describe('CatController', function() {

	describe('getRandomCat()', function() {
		this.beforeAll(async function() {
			this.cat = await CatController.getRandomCat();
			this.secondCat = await CatController.getRandomCat(this.cat);

			this.cats = await CatController.getCats();
		});

		it('should not be undefined', function() {
			this.cat.should.not.be.undefined;
		});

		it('should not be null', function() {
			this.cat.should.not.be.null;
		});
		
		it('should be an object', function() {
			this.cat.should.be.an('object');
		});

		it('should ownProperty id + url + votesCount + id_user', function() {
			this.cat.should.ownProperty('id');
			this.cat.should.ownProperty('url');
			this.cat.should.ownProperty('votesCount');
			this.cat.should.ownProperty('id_user');
		});

		it('random should gte 0 lte cats length', function() {
			for (var i = 0; i < 1000; i++) {
				const random = CatController.getRandomTo(this.cats.length - 1);
				
				random.should.gte(0).lte(this.cats.length - 1);
			}
		});

		it('it should be another cat after second call', function() {
			this.cat.id.should.not.be.equals(this.secondCat.id);
		});
	});

});