/**
 *
 * @author sarkiroka on 2017.07.01.
 */
var ONLY_NUMBERS = /^-?[0-9]+$/;
var FLOAT = /^-?[0-9]*\.[0-9]+$/;
var SCIENTIFIC = /^-?(?:[0-9]|[0-9]?\.[0-9]+)e[0-9]+$/i;
module.exports = function (number) {
	var retValue = false;
	if (typeof number == 'number') {
		retValue = true;
	} else if (typeof number == 'string') {
		if (ONLY_NUMBERS.test(number)) {
			retValue = true;
		} else if (FLOAT.test(number)) {
			retValue = true;
		} else if (SCIENTIFIC.test(number)) {
			retValue = true;
		}
	}
	return retValue;
};
