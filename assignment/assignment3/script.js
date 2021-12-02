function generateTable() {
  var num = document.getElementById("number").value;
  if (num > 0) {
    var myString = "";
    for (i = 1; i <= 10; i++) {
      myString +=
        "<div class='row'>" +
        "<div id='num' class='child'>" +
        num +
        "</div>" +
        "<div id='operator' class='child'> x  </div>" +
        "<div id='num' class='child'>" +
        i +
        "</div>" +
        "<div id='operator' class='child'> = </div>" +
        "<div id='num' class='child'>" +
        i * num +
        "</div>" +
        "</div>" +
        "<br/>";
    }
    document.getElementById("table").innerHTML = myString;
  } else {
    alert("please enter a number");
  }
}
