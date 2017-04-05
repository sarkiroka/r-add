/**
 * normalize result
 * @author sarkiroka on 2017.04.04.
 */
var trimFractions = require('./trim-fractions');
module.exports = function (number) {
	var retValue=trimFractions(number);
	return retValue;
};
