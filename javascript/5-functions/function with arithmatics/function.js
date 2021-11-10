function square_area(width, height) {
  var area = 0;
  if (width > 0 && height > 0) {
    area = width * height;
    return "area of square is: " + area;
  } else {
    return "invalid width or height";
  }
}

var width = 20;
var height = 7;

console.log(square_area(width, height));
