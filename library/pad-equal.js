/**
 * pad with zeros
 * @author sarkiroka on 2017.01.13.
 */
var padInteger=require('./pad-integer');
var padFloat=require('./pad-float');
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
	} else if(dotPositionA>-1 && dotPositionB>-1){ // all float
		numbers=Math.max(a.length, b.length);
		resultA=padFloat(a,numbers);
		resultB=padFloat(b,numbers);
		retValue={
			length:numbers,
			a:resultA,
			b:resultB
		}
	}else{
		if(dotPositionA==-1){
			a+='.0';
		}
		if(dotPositionB==-1){
			b+='.0';
		}
		dotPositionA = a.indexOf('.');
		dotPositionB = a.indexOf('.');
		numbers=Math.max(dotPositionA,dotPositionB);
		resultA=padInteger(a,numbers);
		resultB=padInteger(b,numbers);
		numbers=Math.max(resultA.length,resultB.length);
		resultA=padFloat(a,numbers);
		resultB=padFloat(b,numbers);
		retValue={
			length:numbers,
			a:resultA,
			b:resultB
		}
	}
	return retValue;
};
