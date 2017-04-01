/**
 * pad with zeros
 * @author sarkiroka on 2017.01.13.
 */
var padInteger = require('./pad-integer');
var padFloat = require('./pad-float');
module.exports = function (a, b) {
	var dotPositionA = a.indexOf('.');
	var dotPositionB = b.indexOf('.');
	var numbers, resultA, resultB, retValue;
	if (dotPositionA == -1 && dotPositionB == -1) { // all integer
		numbers = Math.max(a.length, b.length);
		resultA = padInteger(a, numbers);
		resultB = padInteger(b, numbers);
		retValue = {
			length: numbers,
			a: resultA,
			b: resultB
		};
	} else { // contain float
		if (dotPositionA == -1) {
			a += '.0';
		}
		if (dotPositionB == -1) {
			b += '.0';
		}
		dotPositionA = a.indexOf('.');
		dotPositionB = b.indexOf('.');
		numbers = Math.max(dotPositionA, dotPositionB);
		resultA = padInteger(a, numbers,true);
		resultB = padInteger(b, numbers,true);
		numbers = Math.max(resultA.length, resultB.length);
		resultA = padFloat(resultA, numbers);
		resultB = padFloat(resultB, numbers);
		retValue = {
			length: numbers,
			a: resultA,
			b: resultB
		};
	}
	return retValue;
};
