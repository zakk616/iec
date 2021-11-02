// integer comparision with conditions
console.log("Integer Comparision");
var cardBalance = 300;
var shoePrice = 550;

if (shoePrice <= cardBalance) {
  cardBalance -= shoePrice;
  console.log("you bought the Shoes!");
  console.log("New Balanace in Card is :" + cardBalance);
} else if (shoePrice > cardBalance) {
  console.log("you are out of balanace");
}

console.log("String Comparision");
//string comparision with condistions
var val1 = 23;
var val2 = "23";

if (val1 === val2) {
  console.log("Value 1 and Value 2 are Equale");
} else {
  console.log("Value 1 and Value 2 are not Equale");
}
