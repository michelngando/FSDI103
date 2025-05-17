console.log("Functions.js file");

let name = "Michael";
let lastName = "Scott";

console.log("Hello " + name + " " + lastName);

//Using template strings is more efficient

console.log(`Hello ${name} ${lastName}`);

//1-Function declaration

function sayHello (){
   console.log("Hello Cohort #58") 
}

//2- CAll the function
sayHello();
sayHello();

//Example 2, with 1 parameter (identifier), then argument

function greet(firstName){
    console.log(`Hello ${firstName}, welcome!`);
}

greet("Leo");
greet("Wilbert");

// Example 3, with 2 parameters
function greetTwoStudents(name1, name2){
    console.log(`Hello ${name1} and ${name2}, welcome to your JS course!`);
}

greetTwoStudents("Brad", "Alexis");
greetTwoStudents("Bryan", "Chris");

// Prompt (used for the user to enter values) --> If nothing is entered, we get the "null" value
//let user = prompt("What is your name?");
//console.log(user);

//function sayMyName(){
    //let name3 = prompt("What is your name");
    //let age = prompt("What is your age");

    //console.log(`Your name is ${name3} and you are ${age} years old`);
    //}

//sayMyName();

// Example 4, calculator
function add (num1, num2){
    console.log(`The addition between ${num1} and ${num2} = ${num1+num2}`);
}

add(10, 2);
add(254856, 35884165.256);