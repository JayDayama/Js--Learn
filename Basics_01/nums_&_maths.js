const score = 400
console.log(score)

//Explicitily defining the datatype
const bal = new Number(100.02402)
console.log(bal)

console.log(bal.toString().length)
console.log(bal.toFixed(2))

const num = 123.78598
console.log(num.toPrecision(3)) // -> 124
console.log(num.toPrecision(5)) // -> 123.79

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'))
//by default they follow american representation here i told them to follow Indian one

// ** Maths **

console.log(Math)
console.log(Math.random()) // 0 -> 1
console.log(Math.floor((Math.random()*10) + 1)) // 1 -> 10
console.log(Math.floor((Math.random()*10) + 1)) // 1 -> 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //min to max values only