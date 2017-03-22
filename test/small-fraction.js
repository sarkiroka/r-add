var add = require('../.');
describe('small fractions', function () {
	describe('in positive range', function () {
		it('works with numbers', function (done) {
			add(0.1, 0.2, function (err, result) {
				expect(err).toEqual(null, 'small fractions are valid');
				expect(result).toEqual('0.3', '0.1+0.2 should be "0.3"');
				done();
			});
		});
		it('works with strings', function (done) {
			add('0.1', '0.2', function (err, result) {
				expect(err).toEqual(null, 'small fractions are valid');
				expect(result).toEqual('0.3', '0.1+0.2 should be "0.3"');
				done();
			});
		});
		it('works with carry', function (done) {
			add('0.05', '0.05', function (err, result) {
				expect(err).toEqual(null, 'small fractions are valid');
				expect(result).toEqual('0.1', '0.05+0.05 should be "0.1"');
				done();
			});
		});
		it('works with carry over', function (done) {
			add('0.55', '0.55', function (err, result) {
				expect(err).toEqual(null, 'small fractions are valid');
				expect(result).toEqual('1.1', '0.55+0.55 should be "1.1"');
				done();
			});
		});
		it('works with different length of numbers', function (done) {
			add('0.5', '0.05', function (err, result) {
				expect(err).toEqual(null, 'small fractions are valid');
				expect(result).toEqual('0.55', '0.5+0.05 should be "0.55"');
				done();
			});
		});
		it('works with integer and float', function (done) {
			add('1', '0.05', function (err, result) {
				expect(err).toEqual(null, 'small fractions are valid');
				expect(result).toEqual('1.05', '1+0.05 should be "1.05"');
				done();
			});
		});

	});
});
