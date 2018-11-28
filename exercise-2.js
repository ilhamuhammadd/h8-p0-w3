var input = 'hello world!'
var temp = ''

for (var i = input.length-1; i >= 0; i--) {
  temp += input[i]
}

console.log(temp)