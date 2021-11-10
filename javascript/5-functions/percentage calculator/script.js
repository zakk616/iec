var x = document.getElementById("x");
var y = document.getElementById("y");
var result = document.getElementById("result");
var form = document.getElementById("percentage");

form.addEventListener("submit", function (event) {
  if (!x.value || !y.value) {
    alert("enter the numbers!");
  } else {
    x = parseFloat(x.value);
    y = parseFloat(y.value);
    var percent = (x / y) * 100;

    result.innerText = "Answer: " + percent + "%";
    event.preventDefault();
  }
});
