/**
 *
 * @author sarkiroka on 2017.07.01.
 */
var stringify = require('./stringify');
var addDigits = require('./add-digts');
module.exports = function add(numberA, numberB, callback) {
	var result, carry, a, b, numbers, startNumber;
	var startDate = Date.now();
	if (typeof numberA == 'boolean') {
		a = numberB.a;
		b = numberB.b;
		result = numberB.result;
		carry = numberB.carry;
		numbers = numberB.numbers;
		startNumber = numberB.startNumber;
		callback = numberB.callback;
	} else {
		a = stringify(numberA);
		b = stringify(numberB);
		numbers = Math.max(a.length, b.length);
		while (a.length < numbers) {
			a = '0' + a;
		}
		while (b.length < numbers) {
			b = '0' + b;
		}
		result = '';
		carry = false;
		startNumber = 0;
	}
	for (var i = startNumber; i < numbers; i++) {
		if (i % 1000 == 999) {
			var now = Date.now();
			var diff = now - startDate;
			if (diff > 200) {
				process.nextTick(add, false, {
					a: a,
					b: b,
					carry: carry,
					result: result,
					numbers: numbers,
					startNumber: i,
					callback: callback
				});
				return;
			}
		}
		var digitA = a[numbers - i - 1];
		var digitB = b[numbers - i - 1];
		var resultObject = addDigits(digitA, digitB, carry);
		if (!resultObject) {
			callback('there is no result for these numbers: "' + digitA + '"; "' + digitB + '"');
			return;
		}
		result = resultObject.result + result;
		carry = resultObject.carry;
	}
	if (carry) {
		result = '1' + result;
	}
	callback(null, result);
};
