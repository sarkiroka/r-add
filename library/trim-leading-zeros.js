/**
 * trim leading zero
 * @author sarkiroka on 2017.04.08.
 */
module.exports = function (number) {
	while(number.indexOf(0)==0){
		number=number.substr(1);
	}
	return number;
};
