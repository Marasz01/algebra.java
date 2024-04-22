var x = 'Lorem ipsum',
y = 2345,
z = '2345',
q = true;

var trueFalse = !!false;
console.log('1. ' + trueFalse);

console.log(q || x || y || z);

var num = 6;
num --;
console.log(num);

const price = 26.5;
const taxRate = 0.081;

let totalPrice = price + price * taxRate;
var rezultat = totalPrice.toFixed(2);
var xyz = (rezultat / 2).toFixed(2);

console.log('Total:', xyz);