/**
 * add two digits with carry
 * @author sarkiroka on 2017.07.02.
 */
var addTable = require('./add-table.json');
module.exports = function addDigits(a, b, carry) {
	var retValue = addTable[a + b];
	if (!retValue) {
		retValue = addTable[b + a];
	}
	if (!retValue) {
		return null;
	}
	if (carry) {
		var previousCarry = retValue.carry;
		retValue = addDigits('1', retValue.result, false);
		retValue.carry |= previousCarry;
	}
	return retValue;
};
