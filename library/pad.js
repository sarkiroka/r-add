/**
 * pad with zeros
 * @author sarkiroka on 2017.01.13.
 */
module.exports = function (number, numbers) {
	while (number.length < numbers) {
		number = '0' + number;
	}
	return number;
};
