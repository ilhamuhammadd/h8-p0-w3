// Logic Challenge - Target Terdekat

// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
    // you can only write your code here!
    tempo = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            tempo.push(i)
        }
    }

    tempx = []
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] === 'x') {
            tempx.push(j)
        }
    }

    // console.log(tempo)
    // console.log(tempx)

    if (tempx.length === 0) {
        return 0
    } else if (tempo[0] > tempx[tempx.length - 1]) {
        return tempo[0] - tempx[tempx.length - 1]
    } else if (tempo.length < tempx.length) {
        return tempx[0] - tempo[0]
    }

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2