console.log("Hello World CH#58");

//This is a comment in JS. We use camelCase for variables synthax
console.log("Hello my name is Michel, and I am 22 years old");

// STRING VARIABLES
// Variable synthax: keyword variableName = value; Quotation is a string
let name = "Peter";
let lastName = "Parker";

console.log(name);
console.log(lastName);
console.log("Hello, my name is " + name + " " + lastName );
//console.log(name, lastName);
//CREATING NUMERICAL VARIABLES --> No quotations for numbers
let age = 40;
let grade = 9.4;

console.log(age);
console.log(grade);
console.log("I am" + " " + age + " " + "years old");
console.log("I am "+age+ " years old");

//BOOLEAN VARIABLES (true/false)
let isAProfessor = true;
let isAStudent=false;
let isAdmin =true;

console.log(isAProfessor);
console.log(isAStudent);

/* Many lines of comments
xxxxxx
xxxxxx
End of comment */

//MATH OPERATIONS
//Addition
let number1 = 8.3;
let number2 = 4;
let addition = number1 + number2;

console.log(addition);
console.log(number1 + " + " + number2 + " = " + (number1+number2));

//Substraction
let substraction = number1 - number2;
console.log(number1 + " - " + number2 + " = " + substraction.toFixed(2)); //.toFixed is used as a method to round numbers

//Multiplication
let multiplication = number1 * number2;
console.log(number1 + " * " + number2 + " = " + multiplication); 

//Change variable value
number1 = 10;
number2 = 20;
let addition2 = number1 + number2;

console.log(addition2);
console.log(number1 + " + " + number2 + " = " + (addition2));

//CONSTANT VARIABLES --> JS standards is to use upper case --> constant values cannot be reassigned
const PI = 3.1416;
const myName = "Michel"

console.log(PI);
console.log(myName);