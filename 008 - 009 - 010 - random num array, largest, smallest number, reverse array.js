// create/print array of random N numbers

	let input = 10;
	let numArr = [];

	for (let i = 0; i < input; i++) {
	  let randNum = Math.floor((Math.random() * input) + 1);
	  numArr.push(randNum);
  }

	console.log(numArr);

	let smallestNum = numArr[0];
	let largestNum = numArr[0];

	for(i = 0; i < numArr.length; i++) {
		if(numArr[i] < smallestNum) {
			smallestNum = numArr[i];
		}
		else if(numArr[i] > largestNum) {
			largestNum = numArr[i];
		}
  }

  	numArrRev = [];

  	for(i = numArr.length-1; i > 0; i--) {
  		numArrRev.push(numArr[i]);
  	}

	console.log("The smallest number in that array: " + smallestNum + ", " + "the largest number in that array: " + largestNum);
	console.log("The array backwards is: " + numArrRev);