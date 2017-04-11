/**
 * normalize result
 * @author sarkiroka on 2017.04.04.
 */
var trimFractions = require('./trim-fractions');
var trimLeadingZeros=require('./trim-leading-zeros');
module.exports = function (number) {
	var retValue = trimFractions(number);
	retValue=trimLeadingZeros(retValue);
	return retValue;
};
