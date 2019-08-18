// listA is a list with a lot of numbers, a huge amount of numbers
// listB has a small abount of numbers
// goal is to find all the combinations where 1 num of lsA and 1 num of lsB equal target sum
// dicts help me store key-value pairs
// i can quickly retriev a value given the key
// i can quickly identify if it contains a key

// time - space complexity, need to research

let lsA = [1,2,3,3,2,1,5,7,6,7,9,10];
let lsB = [4,2,5,6,1,3];
let dictA = {};

sum = 8;

for (let i = 0; i < lsA.length; i++) {
	dictA[lsA[i]] = lsA[i];
  console.log(dictA);
}

let counter = 0;

for(let i = 0; i < lsB.length; i++) {
  toFind = sum - lsB[i];
  if(dictA[toFind]) {
    console.log(dictA[toFind] + " + " + lsB[i] + " = " + sum);
    counter++;
  }
}

console.log("There are " + counter + " combinations to reach the sum of " + sum);