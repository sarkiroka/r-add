/**
 * trim fraction to valuable digits
 * @author sarkiroka on 2017.01.29.
 */
module.exports = function (number) {
	var retValue=number;
	if(retValue.indexOf('.')>-1){
		while(retValue[retValue.length-1]=='0'){
			retValue=retValue.substr(0,retValue.length-1);
		}
	}
	return retValue;
};
