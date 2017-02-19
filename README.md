# r-add
Just because javascript can't calculate with large or float number, a cross-browser, numerically stable way to add numbers in javascript.

# Installation
```
npm i r-add
```

## Usage
```javascript
var add = require('r-add');
var a = 0.1;
var b = 0.2;

// the bad solution
console.log(a + b); // prints 0.30000000000000004

// the good solution
add(a, b, function (err, result){
	console.log(result); // prints 0.3
});
```

## Why

Because IEEE 754
