// fibonacci series
// input = the amount of numbers from the sequence it is supposed to show starting from 1

let numA = 0;
let numB = 1;
let numC = 1;

let input = 10;

for(var i = 0; i < input; i++) {
  console.log(numC);
  numC = numA + numB;S
  numA = numB;
  numB = numC;
}