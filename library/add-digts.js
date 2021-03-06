/**
 * add two digits with carry
 * @author sarkiroka on 2017.07.02.
 */
module.exports = function addDigits(a, b, previousCarry) {
	var retValue;
	if (a == '.' && b == '.') {
		retValue = {
			result: '.',
			carry: previousCarry
		};
	} else {
		var result = 1 * a + 1 * b + (previousCarry ? 1 : 0);
		retValue = {
			result: '' + (result % 10),
			carry: result > 9
		};
	}
	return retValue;
};
