// create/print array of random N numbers

let input = 10;
let numArr = [];

for (let i = 0; i < input; i++) {
  let randNum = Math.floor((Math.random() * input) + 1);
  numArr.push(randNum);
}

console.log(numArr);