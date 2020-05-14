

function array(width, height) {
    let result = []
    for(let i = 0; i < width; i++) {
        result[i] = []
        for(let k = 0; k < height; k++) {
            result[i][k] = Math.round(Math.random() * 5)
        }
    }
    return result
}

console.log(array(4, 10))