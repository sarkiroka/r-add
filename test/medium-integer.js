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
		it('works with carry I.', function (done) {
			add('55', '55', function (err, result) {
				expect(err).toEqual(null, 'medium integers are valid');
				expect(result).toEqual('110', '55+55 should be "110"');
				done();
			});
		});
		it('works with carry II.', function (done) {
			add('5099', '5099', function (err, result) {
				expect(err).toEqual(null, 'medium integers are valid');
				expect(result).toEqual('10198', '5099+5099 should be "10198"');
				done();
			});
		});
		it('works with different length of strings', function (done) {
			add('999', '9999', function (err, result) {
				expect(err).toEqual(null, 'medium integers are valid');
				expect(result).toEqual('10998', '999+9999 should be "10998"');
				done();
			});
		});
	});
});
