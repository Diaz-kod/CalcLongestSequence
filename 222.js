
let inputArr = [2, 5, 6, 7, 12, 15, 0, 3, 8, 9];

 function  copy(inputArr) {
    let copyArr = []
    for(let i = 0; i < inputArr.length; i++) {
        copyArr.push(inputArr[i])
    }
    return copyArr
}
console.log(copy(inputArr))

