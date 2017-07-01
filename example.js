/**
 * example of usage
 * @author sarkiroka on 2017.07.01.
 */
var add = require('.');// you should require by name: var add=require('r-add');

add(1, 1, printResult);
add('1', '1', printResult);

function printResult(err, result) {
	if (err) {
		console.error(err);
	} else {
		console.log('no error, result is', result);
	}
}
