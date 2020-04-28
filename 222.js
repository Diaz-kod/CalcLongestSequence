
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
        if( n % currentNumber === 0) {
            result++
        }
        currentNumber--
        i++
    }
    return result
}


function factorial(n) {
    let result = 1;
    let currentNumber = n - 1;
    let previousNumber = n;
    let i = 0;

    while(currentNumber >= 1) {
            previousNumber = previousNumber-- * currentNumber--;
            result = previousNumber;
            i++
    }
    return result
}

function sumDividers(n) {
    let result = 0;
    let currentNumber = n - 1;
    let i = 0;

    while(currentNumber >= 1) {
        if(n % currentNumber === 0) {
            result = result + currentNumber
        }
        currentNumber--
        i++
    }
    return result === n ? true : false
}

console.log(sumDividers(6));