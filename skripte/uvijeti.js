var text1 = "moje ime1";
var text_2 = "moje_ime1:";

var x = text1 === text_2;
console.log("x= " + x);

if (x === true) {
  console.log("varijable su identnične");
} else if ("moje ime1" !== "mojeime1") {
  console.log("varijable NISU identnične");
} else if ("moje ime1" === "mojeime1") {
  console.log("varijable jesu identnične");
} else {
  console.log("nije ispunjeno niti jedan uvijet");
}
