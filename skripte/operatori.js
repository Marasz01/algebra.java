var x = 'Lorem ipsum',
    y = 2345,
    z = '2345',
    q = true,
    w = false;

var trueFalse = q;
/*
console.log('trueFalse=' + trueFalse);

if (trueFalse === false) {
    console.log('1. q = ' + trueFalse);
}*/
/*
if (q && w) {
    console.log('q i w su true');
} else {
    console.log('jedan od q ili w nije true');
}
*/
console.log('ostatak pri cjelobrojnom dijeljenju od 9/3 =' + (9 % 3));
console.log('ostatak pri cjelobrojnom dijeljenju od 5/2 =' + (5 % 2));

if (9 % 3 === 0 || 5 % 2 === 0) {
    console.log('ostatak pri cjelobrojnom dijeljenju je 0');
} else {
    console.log('ostatak pri cjelobrojnom dijeljenju NIJE 0');
}

for (i = 0; i <= 10; i++) {
    if (i === 0) {
        continue;
    }
    if (i % 2 !== 0) {
        console.log('Broj ' + i + ' je neparan');
    }
}

/*
if (trueFalse !== 'true') {
    console.log('2. q = ' + trueFalse);
}*/
