
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



function getnumberDivisors(n, currentNumber) {
    let result = 0;
    if(currentNumber === undefined) {
        currentNumber = n
    }
    if(currentNumber === 0) {
        return result
    }
    if(n % currentNumber === 0) {
        result = getnumberDivisors(n, currentNumber - 1) + 1
    }
    else {
        result = getnumberDivisors(n, currentNumber - 1)
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
    factorial();
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
    return result === n 
}


function getFactorial(n) {
    if(n === 1) {
        return 1
    }
    else {
        return n * getFactorial(n - 1)
    }
}


function getXuy(n) {
    let result = [];
    let i = 0;
    while(n >= 1) {
        if(n / 10) {
            result.push(0 + n / 10);
        }
        if(n / 20) {
            result.push(0 + n / 20);
        }
        if(n / 30) {
            result.push(0 + n / 30);
        }
        return result
    }
}

console.log(getXuy(3455));





