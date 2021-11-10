var students = [];

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.greeting = function () {
    return "Hi! I'm " + this.firstName + " and I'm " + this.age + " years old.";
  };
}

// var s1 = new Student("Ajmal", "Jamil", 45);
// console.log(s1.greeting());

students.push(new Student("Muneeb", "Ahmed", 23));
students.push(new Student("Wali", "M.", 34));

students.forEach((element) => {
  console.log(element.greeting());
});
