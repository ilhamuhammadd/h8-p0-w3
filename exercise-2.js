function balikString(kata) {
  var temp = ''
  for (var  i = kata.length-1; i >= 0; i--) {
   temp += kata[i]
  }
  return temp
}

console.log(balikString('Hello world!'));