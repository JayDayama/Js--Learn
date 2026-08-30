"use strict";//treats all js as newer version

// aleart(3 + 3) this is node js not a browser

let name = "Jay Dayama"
let age = 19
let islogged = false

// number => (integer)
// bigint
//string => ""
//boolean => true/false
// null -> standalone value (lets say it is empty)
// undefined => we havent given it some value yet
//symbol => unique(mainly used in react)IMP

//object

console.log(typeof null) //Object
console.log(typeof undefined) //undefined
const id = Symbol('123')
const otherid = Symbol('123')
console.log(id == otherid)

const myFunction = function(){
    console.log("Jay")
}

console.log(typeof myFunction)

// Memories in Java Script

// Stack(primitive)->copy  &  Heap(Non-Primitive)->only real copy || Refrence

let userone = {
    email : "jaydayma@com.com",
    upi : "user@sbi"
}

let usertwo = userone
usertwo.email = "Jaydayama0905@gmail.com"
console.log(usertwo.email);
console.log(userone.email);