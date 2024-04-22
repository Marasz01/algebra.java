var x = 3;
while (x <= 20) {
    if (x % 9 === 0) {
        x++;
        continue;
    }
    console.log(x);
    x++;
}
