// Array

// const myarr = [0,1,2,3,4,5,true,"Jay"] -> Also Valid
// In Js arrays are resizeable ans they create shallow copies
const myarr = [0,1,2,3,4,5]
const myheroes = ["Iron Man" , "Captain America" , "Dr. Strange"]
const myarr2 = new Array(1,2,3,4,5)
// console.log(myarr)
console.log(myarr[1])

// Methods:

// myarr.push(6)
// myarr.push(7)
// myarr.pop()
// myarr.unshift(9) // Time Consuming
myarr.shift()

console.log(myarr.includes(9))
// console.log(myarr.indexOf(9))// -> -1
console.log(myarr.indexOf(3)) // index of element 3

const newarr = myarr.join()
console.log(myarr)
console.log(newarr)
console.log(typeof newarr)

// slice and splice
console.log("A" , myarr)
const myn1 = myarr.slice(1,3)
console.log("B" , myarr)
console.log(myn1)
const myn2 = myarr.splice(1,3)
console.log("C" , myarr)
console.log(myn2)