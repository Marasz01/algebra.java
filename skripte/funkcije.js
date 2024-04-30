//1.
function ispisi(unos) {
    console.log('DEBUG: ---> ' + unos);
    var x = 2;
    x++;
    return x;
}

ispisi('nešto ispiši na konzolu'); //samo ispis, bez vrijednosti

var nekaVarijabla = ispisi(); //kako bi pokazali da funkcija nema vrijednost

console.log('>>>' + nekaVarijabla); //vratit će vrijednost zbog returna

//2.
var nekiNiz = ['ime', 'prezime', 'godine', 'broj cipela'];

function pronadjiNajduzuRijec(niz) {
    var najduzaRijec = '';
    var duljina = 0;
    for (var element of nekiNiz) {
        if (element.length > duljina) {
            duljina = element.length;
            najduzaRijec = element;
        }
    }
    return najduzaRijec;
}

var najduzaRijec = pronadjiNajduzuRijec(nekiNiz);
console.log(najduzaRijec);

//3. VAŽNO!!! ;)
function getMax(a, b) {
    let retVal = 0;
    if (a > b) {
        retVal = a;
    } else if (b > a) {
        retVal = b;
    } else if (a === b) {
        retVal = a;
    } else {
        retVal = 'error';
    }
    return retVal;
}

console.log('veći broj je: ' + getMax('string', 2));
console.log('veći broj je: ' + getMax(5, 2));

//4.
function zbroji(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'error';
    }
    return a + b;
}

console.log('a + b = ' + zbroji(2, 3));
console.log('a + b = ' + zbroji('string', 4));

var prvi = zbroji(3, 3);
var drugi = zbroji(5, 5);
if (prvi !== 'error' && drugi !== 'error') {
    var dvaPutaSuma = prvi * drugi;
    console.log(dvaPutaSuma);
} else {
    console.log('nije moguće izračunati');
}

function pomnozi(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('nije moguće izvršiti');
    }
    return a * b;
}

console.log('a * b = ' + pomnozi(4, 5));

function podijeli(a, b) {
    if (b == 0) {
        console.log('dijeljenje s 0 nije definirano');
        return 'error';
    }
    return a / b;
}

console.log('a / b = ' + podijeli(2, 0));
