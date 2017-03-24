/**
 * pad the fraction
 * @author sarkiroka on 2017.03.18.
 */
module.exports = function (number, numbers) {
	while (number.length < numbers) {
		number += '0';
	}
	return number;
};
