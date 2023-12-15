/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let result = 0;

let a = Number(prompt("Enter your number 1 "));
let b = Number(prompt("Enter your number 2 "));
let operator = String(prompt("Enter the operator ="));

let faulty = Math.random() * 10;

if (operator === "+") {
  result = faulty > 10 ? a - b : a + b;
  console.log(result);
} else if (operator === "*") {
  result = faulty > 10 ? a + b : a * b;
  console.log(result);
} else if (operator === "-") {
  result = faulty > 10 ? a / b : a - b;
  console.log(result);
} else if (operator === "/") {
  result = faulty > 10 ? a ** b : a * b;
  console.log(result);
} else {
    console.log("choose a correct operator next time");
}


