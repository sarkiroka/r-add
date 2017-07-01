/**
 * add two number
 * @author sarkiroka on 2017.07.01.
 */
var add = require('./library/add');
var validate = require('./library/validate');
module.exports = function (a, b, callback) {
	var isAValid = validate(a);
	var isBValid = validate(b);
	var isCallbackValid = typeof callback == 'function';
	if (isAValid && isBValid) {
		add(a, b, callback);
	} else {
		var err = new Error('Invalid parameters {a:' + (isAValid ? 'ok' : 'invalid') + ', b:' + (isBValid ? 'ok' : 'invalid') + ', callback:' + (isCallbackValid ? 'ok' : 'invalid') + '}');
		callback(err);
	}
};
