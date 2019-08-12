// check if a given number is even or odd
// input = the number to be checked
// use the modulo (sic?) % - if there is no remainder, than the number given is an even number, otherwise odd

let inputA = 10;
let inputB = 3;
let inputC = 6000;
let inputD = 4.0001;

function isEven(num) {
	if(num % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}


console.log("is the number " + inputA + " even? "+ isEven(inputA) + ".");
console.log("is the number " + inputB + " even? "+ isEven(inputB) + ".");
console.log("is the number " + inputC + " even? "+ isEven(inputC) + ".");
console.log("is the number " + inputD + " even? "+ isEven(inputD) + ".");