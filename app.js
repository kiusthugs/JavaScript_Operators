console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
// YOUR CODE HERE
console.log("EXERCISE 1:\n==========\n");
let a = 20
let b = 4
let add = a + b
let minus = a - b
let multiply = a * b
let dividing = a / b
console.log(`Add: ${add} | Minus: ${minus} | Multiply: ${multiply} | Divide: ${dividing}`)

// Exercise 2
// YOUR CODE HERE
console.log("EXERCISE 2:\n==========\n");
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

console.log(num + str) //"1111" string plus number type concatenates
console.log(num + str2) //"11eleven"
console.log(num + isPresent) //true == 1, 11 + 1 = 12
console.log(firstName + num) // "Frodo11"
console.log(isPresent + str) // true11
console.log(firstName + lastName) // Frodo Baggins
// Exercise 3
console.log("EXERCISE 3:\n==========\n");
// YOUR CODE HERE
let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

console.log(val == str3) //true
console.log(val === str3) // false
console.log(!isAwake) //true
console.log("eleven" == str4 && val >= str3) // false
console.log(!isAwake || isAwake) // true
console.log(0 == false) // true
console.log(0 === false) // false
console.log(0 != false) // false
console.log(0 !== false) // true
