// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Function akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.


function pasanganTerbesar(num) {
  // you can only write your code here!
  arr = num.toString()
  temp = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]+arr[i+1] > temp ) {
        temp = arr[i]+arr[i+1]
    }
  }
  return temp

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99