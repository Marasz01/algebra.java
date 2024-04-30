//1. zadatak
var firstName = 'Ivan';
var lastName = 'Horvat';
var fullName = firstName + ' ' + lastName;

console.log(fullName);

//2. zadatak
var z = 6;
var y = 0;

var x = z === 2 ? y : 5;

if (z === 2) {
    x = y;
} else {
    x = 5;
}
console.log('x = ' + x);

//3. zadatak
var x = 1;

for (x = 1; x < 20; x++) {
    if (x % 2 == 0) {
        console.log('Broj ' + x + ' je paran');
    } /*else (
        console.log('Broj ' + x + ' je neparan')
    ) ako želimo ispis neparnih brojeva*/
}
