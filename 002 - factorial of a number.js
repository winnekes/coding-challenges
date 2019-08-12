//  input = the number of which you want to get the factorial of


let factorial = 1;
let inputA = 5;
let inputB = 7;
let inputC = 1;

function getFactorial(input) {
	for(let i = input; i > 1; i--) {
 		factorial *= i;
 	}
}
console.log("The factorial of "+ inputA +" is " + getFactorial(inputA));
console.log("The factorial of "+ inputB +" is " + getFactorial(inputB));
console.log("The factorial of "+ inputC +" is " + getFactorial(inputC));