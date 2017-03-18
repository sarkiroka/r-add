/**
 * pad the integer part
 * @author sarkiroka on 2017.03.18.
 */
module.exports = function (number, numbers) {
	while (number.length < numbers) {
		number = '0' + number;
	}
	return number;
};
