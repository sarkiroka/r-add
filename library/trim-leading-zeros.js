/**
 * trim leading zero
 * @author sarkiroka on 2017.04.08.
 */
var leadingZeroRegex=/^0+([^.])/;
module.exports = function (number) {
	var retValue=nember.replace(leadingZeroRegex,'$1');
	return retValue;
};
