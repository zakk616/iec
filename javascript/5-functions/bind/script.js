//global scope
this.car = "Honda Civic";

var myCar = {
  car: "Suzuki Mehran",
  getCar: function () {
    return this.car;
  },
};

//check local scope
console.log(myCar.getCar());

//this code will go for global scope
var globalScopeCar = myCar.getCar;
console.log(globalScopeCar());

//this code will bind the local variable's getCar function to its local scope
var localScopeCar = myCar.getCar.bind(myCar);
console.log(localScopeCar());
