
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

function vowels(n) {
    let result = 0;
    for(let i = 0; i < n.length; i++) {
        if(letterCheck(n[i])) {
            result++
        }
    }
    return result
}




function letterCheck(n) {
    let letters = 'ауоыиэяюёе';
    for(let i = 0; i < letters.length;i++) {
        if(n === letters[i]) {
            return true
        }
    }
    return false
}
// console.log(letterCheck('k'));


function addingVowelsAndConsonants(n) {
    let result = '';
    let leftpart = '';
    let rightpart = '';
    for(let i = 0; i < n.length; i++) {
        if(letterCheck(n[i])) {
            leftpart = leftpart + n[i]
        }
        else {
            rightpart = rightpart + n[i]
        }
    }
    return result = leftpart + rightpart
}

function getUpperCase(n) {
    let result = '';
    for(let i = 0; i < n.length; i++) {
        if(n[i - 1] == '.') {
             result = result + n[i].toUpperCase()
        }
        else {
        result = result + n[i]
        }
    }
    return result
}

function stringSubstitute(x, n) {
    let itAFirstPart = true;
    let result1 = ''
    let result2 = ''
    for(let i = 0; i < x.length; i++) {
        if(x[i] == '$') {
            itAFirstPart = false
            continue
        }
        if(itAFirstPart) {
            result1 = result1 + x[i]
        }
        else {
            result2 = result2 + x[i]
        }
    }
    return result1 + n + result2
}

function fourElement(n) {
    let result = ''
    let i = 0;
    while(i < n.length && n[i] !== 'y')  {
        result = result + n[i]
        i++
    }
    return result
}


function cuttingOut(n, a, b) {
    let result = ''
    for(let i = a ; i < n.length; i++) {
        if(b > result.length) {
            result = result + n[i]
        }
        else {
            return result
        }
    }
    return result
}


function toUpLetter(n) {
    let result = ''
    for(let i = 0; i < n.length; i++) {
        if(i % 2 == 0) {
            result = result + n[i].toUpperCase()
        }
        else {
           result = result + n[i]
        }
    }
    return result
}


function backwards(n) {
    let result = ''
    for(let i = n.length; i >= 0; i--) {
        if(n[i]) {
         result = result + n[i]
        }
    }
    return result
}

function spaceRemoval(n) {
    let result = ''
    for(let i = 0; i < n.length; i++) {
        if(n[i] === ' ') {
            result
        }
        if(n[i] !== ' ') {
        result = result + n[i]
        }
    }
    return result
}

function lowerCase(n) {
    let result = ''
    for(let i = 0; i < n.length; i++) {
        if(n[i]) {
            result = result + n[i].toLowerCase()
        }
    }
    return result
}


function polindrop(n) { 
    for(let i = 0; i < n.length; i++) {
        if(n === backwards(n)) {
            return true
        }
       return false
    }
}

console.log(polindrop(spaceRemoval((lowerCase('Доход                                    ')))))