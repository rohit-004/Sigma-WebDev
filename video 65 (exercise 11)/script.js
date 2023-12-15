let result = 1;
let arr = [];

let a = prompt("enter the number you want to find factorial of : ");

// for (let i = 1; i <= a; i++) {
//  result *= i;
// }

// console.log(result);

for (let i = 1; i <= a; i++) {
  arr.push(i);
}

const factorial = arr.reduce((acc, num) => acc * num);

console.log(factorial);
