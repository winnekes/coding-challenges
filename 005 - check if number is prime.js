// check if a given number is a prime number

let inputA = 7;
let inputB = 5;
let inputC = 1020;

function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}


console.log("Is the number " + inputA + " a prime? " + isPrime(inputA));
console.log("Is the number " + inputB + " a prime? " + isPrime(inputB));
console.log("Is the number " + inputC + " a prime? " + isPrime(inputC));
