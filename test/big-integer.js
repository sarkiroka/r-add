var add = require('../.');
var countOfDigits = 1000;
describe('big integers', function () {
	describe('in positive range', function () {
		it('works with strings', function (done) {
			var numberA = '';
			var numberB = '';
			var x = '';
			for (var i = 0; i < countOfDigits; i++) {
				numberA += '1';
				numberB += '1';
				x += '2';
			}
			add(numberA, numberB, function (err, result) {
				expect(err).toEqual(null, 'big integers are valid');
				expect(result).toEqual(x, '1111...+1111... should be "2222..."');
				done();
			});
		});
		it('works with carry', function (done) {
			var numberA = '';
			var numberB = '';
			var x = '1';
			for (var i = 0; i < countOfDigits; i++) {
				numberA += '9';
				numberB += '9';
				x += i == countOfDigits - 1 ? '8' : '9';
			}
			add(numberA, numberB, function (err, result) {
				expect(err).toEqual(null, 'big integers are valid');
				expect(result).toEqual(x, '9999...+9999... should be "1999...8"');
				done();
			});
		});
	});
});
