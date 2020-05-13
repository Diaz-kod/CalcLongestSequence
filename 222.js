
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



function lineCalculator(n) {
    let result = 0
    let result1 = 0
    let result2 = 0
    let itIsfirstPart = true
    let operator1 = true
    let operator2 = true 
    for(let i = 0; i < n.length; i++) {
        if(n[i] === ' ' && operator1 === true) {
            operator1 = false
            continue
        }
        if(n[i] === '+' || n[i] === '-' || n[i] === '/' || n[i] === '*') {
            itIsfirstPart = false
            continue
        }
        if(itIsfirstPart) {
            result1 = Number(result1 + n[i])
        }
        if(n[i] === ' ' && itIsfirstPart === false && operator1 === false) {
            operator2 = false
        }
        if(itIsfirstPart === false && operator2 === false) {
            result2 = Number(result2 + n[i])
        }
    }
    for(let j = 0; j < n.length; j++) {
        if(n[j] === '+') {
                result = result1 + result2;
            }
        if(n[j] === '-') {
                result = result1 - result2;
            }
        if(n[j] === '/') {
                result = result1 / result2;
            }
        if(n[j] === '*') {
                result = result1 * result2;
        }
    }
    return result
}


function triangleArea(n) {
    let result = 0
    for(let i = 0; i < 12; i++) {
        if(n >= 0) {
            result = result + n
        }
    }
    return result
}

function sum(a) {
    return function(b) {
        return a * b
    }
}



function alias(a, b) {
    return function(x) {
        return x >= a && x <= b
    }
}


function aclips(arr) {
    return function(x) {
        return arr.includes(x)
    }
}


// let users = [
// { name: 'John', age: 20, surname: 'Smith'},
// { name: 'Ellies', age: 25, surname: 'Cooper'},
// { name: 'Dilon', age: 15, surname: 'Walker'}
// ];

function byField(field) {
   return (a, b) => a[field] > b[field] ? 1 : -1;
}

// users.sort(byField('name'));
// users.forEach(user => alert(user.name));

// users.sort(byField('age'));
// users.forEach(user => alert(user.name));


function makeArmy() {
  let shooters = [];

  for(let i = 0; i < 10; i++) {
    let shooter = function() { // функция shooter
      // console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();



function sum(a) {
    return function(b) {
        return a + b
    }
}


function inBeetwen(a, b) {
    return function(x) {
       return x >= a && x <= b
    }   
}

function inArray(ar) {
    return function(x) {
        return ar.includes(x)
    }
}


function oneArr(n) {
    let arr = []
    for(let i = 0; i < 10; i++) {
         arr.push(Math.floor(Math.random() * 100));
    }
    return arr
}

let array = oneArr()



// function twoArr() {
//     let oldarr = [12, 24, 6, 31, 50, 14, 20, 8, 2]
//     let newArr = []
//     let min = oldarr[0]
//     for(let key in oldarr) {
//     console.log(oldarr[key])      
//         if (min > oldarr[key]) { 
//             min = oldarr[key]
//             newArr.unshift(min);
//             oldarr.push(oldarr[key])
//             oldarr.pop(oldarr[key])
//         }
//     }  
//     return newArr
// }
// let ass = twoArr()

// console.log(ass)

let inputArr = [2, 5, 6, 7, 12, 15, 0, 3, 8, 9];

 function  copy(inputArr) {
    let copyArr = []
    for(let i = 0; i < inputArr.length; i++) {
        copyArr.push(inputArr[i])
    }
    return copyArr
}
console.log(copy(inputArr))

