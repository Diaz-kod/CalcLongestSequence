
function calcLongestSequence(n) {
	let currentlength = 0;
	let maxLength = 1;
	let currentNumber = 0;
	let previousNumber = 0;
	let i = 0;
	 while(currentNumber = n % 10) {
    if (n % 10 === previousNumber) {
        currentlength++
        previousNumber = currentNumber;
        maxLength = currentlength;
    }
    else {
    	currentlength = 1;
    	previousNumber = currentNumber;
    }
    n = Math.floor(n / 10);
    i++
  }
  	return maxLength
}


function numberDivisors(n) {
    let result = 0;
    let currentNumber = n;
    let i = 0;

    while(currentNumber >= 1) {
        if( n / currentNumber === Math.round(n / currentNumber)) {
            result++
        }
        currentNumber--
        i++
    }
    return result
}

console.log(numberDivisors(40));



