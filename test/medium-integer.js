var add = require('../.');
describe('medium integers', function () {
	describe('in positive range', function () {
		it('works with numbers', function (done) {
			add(1000, 1000, function (err, result) {
				expect(err).toEqual(null, 'medium integers are valid');
				expect(result).toEqual('2000', '1000+1000 should be "2000"');
				done();
			});
		});
		it('works with strings', function (done) {
			add('1000', '1000', function (err, result) {
				expect(err).toEqual(null, 'medium integers are valid');
				expect(result).toEqual('2000', '1000+1000 should be "2000"');
				done();
			});
		});
		it('works with carry', function (done) {
			add('5099', '5099', function (err, result) {
				expect(err).toEqual(null, 'medium integers are valid');
				expect(result).toEqual('10198', '5099+5099 should be "10198"');
				done();
			});
		});
	});
});
