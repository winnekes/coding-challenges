// check if a given number is a prime number
// what defines a prime number? can only be divided by itself and 1 -> 2 factors

// only positive numbers?

let inputA = 7;
let inputB = 89;
let inputC = 97;

function isPrime(input) {
  for(let i = 2; i < input; i++) {
    if(input % i === 0) {
      return false;
    }
  }
  
  if(input > 1) {
    return true;
  }
}
  
console.log("Is the number " + inputA + " a prime? " + isPrime(inputA));
console.log("Is the number " + inputB + " a prime? " + isPrime(inputB));
console.log("Is the number " + inputC + " a prime? " + isPrime(inputC));