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

## Why?

Because the javascript uses IEEE 754 standard and it has only 64 bit for numbers. From this 52 bit for value and 11 bit for exponent. This is the reason for max safe integer is 9007199254740991. This number is the maximum which javascript can calculate precisely.

For example:

```javascript
var a = 9007199254740991 + 1;
var b = 9007199254740991 + 2;
console.log(a == b); // prints true
```

Of course the type of this numbers are number but for maniacs the example works with type safe relation operator too:

```javascript
var a = 9007199254740991 + 1;
var b = 9007199254740991 + 2;
console.log(a === b); // prints true
```

And the maximum value of a number in javascript is only 1.7976931348623157e+308

It is unsuitable for precise scientific calculations.

## Why string?

See above :)

The numbers cannot store the precise value of large or extreme accurate values. The strings can.
