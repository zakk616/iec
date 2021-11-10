var student1 = {
  firstName: "Zakk",
  lastName: "Schnider",
  age: 23,
};

var student2 = new Object();
student2.firstName = "Ali";
student2.lastName = "Ahmed";
student2.age = 30;

var student3 = {};
student3.firstName = "Khan";
student3.lastName = "M.";
student3.age = 40;

//method 1
console.log(
  student1.firstName + ", " + student1.lastName + ", " + student1.age
);

//method 2
console.log(
  student2.firstName + ", " + student2.lastName + ", " + student2.age
);

//method 3
console.log(
  student3.firstName + ", " + student3.lastName + ", " + student3.age
);

var students = [];
students.push(student1);
students.push(student2);
students.push(student3);

console.log("All Students:");
students.forEach((element) => {
  console.log(element);
  console.log(element.firstName + ", " + element.lastName + ", " + element.age);
});
