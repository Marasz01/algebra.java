var x = false;
if (x) console.log('asdf');
console.log('abcd');
//izvršit će se samo drugi console.log jer nemamo zagrade

var x = true;
if (x == true) {
    console.log('adsf');
    console.log('abcd');
}
//izvršit će se oba jer su u istoj zagradi
//ako napišemo samo (x) onda je x određen kao var x = "bilo koja vrijednost", dodavanjem == određujemo mu vrijednost
