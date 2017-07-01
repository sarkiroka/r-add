var add = require('../.');
describe('small integers', function () {
	describe('in positive range', function () {
		it('works with numbers', function (done) {
			add(1, 1, function (err, result) {
				expect(err).toEqual(null, 'small integers are valid');
				expect(result).toEqual('2', '1+1 should be "2"');
				done();
			});
		});
		it('works with strings', function (done) {
			add('1', '1', function (err, result) {
				expect(err).toEqual(null, 'small integers are valid');
				expect(result).toEqual('2', '1+1 should be "2"');
				done();
			});
		});
		it('works with carry', function (done) {
			add('5', '5', function (err, result) {
				expect(err).toEqual(null, 'small integers are valid');
				expect(result).toEqual('10', '5+5 should be "10"');
				done();
			});
		});

	});
});
