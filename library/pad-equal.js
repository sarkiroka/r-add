/**
 * pad with zeros
 * @author sarkiroka on 2017.01.13.
 */
var padInteger=require('./pad-integer');
module.exports = function (a, b) {
	var dotPositionA = a.indexOf('.');
	var dotPositionB = a.indexOf('.');
	var numbers,resultA,resultB,retValue;
	if(dotPositionA==-1 && dotPositionB==-1){ // all integer
		numbers=Math.max(a.length, b.length);
		resultA=padInteger(a, numbers);
		resultB=padInteger(b, numbers);
		retValue={
			length: numbers,
			a: resultA,
			b: resultB
		};
	} else if(dotPositionA>-1 && dotPositionB>-1){
		numbers=Math.max(a.length, b.length);
		retValue={
			length:numbers,
			a:a,
			b:b
		}
	}
	return retValue;
};
