// *** FUNCTIONS***

// function Myname(){
//     console.log("J")
//     console.log("a")
//     console.log("y")
// }

// // Myname --> refrence
// // Myname() --> Execution
// Myname()

// function add2num(num1,num2){
//     console.log(num1+num2)
// }
// add2num(3,7)
//console.log(add2num(3,8)) -> output **undefined**
// add2num(3,'a')
function add2num(num1,num2){
    // let result = num1+num2 -> this result is different than the one defined outside
    // return result
    return num1+num2
}
let result = add2num(4,6)
console.log(add2num(3,8))

function loginmessage(username = "Sam"){//sam is a default value
    if(username == undefined){
        console.log("Please Enter a Username")
        return 
    }
    return `${username} just Logged in`
}
let str = loginmessage("Jay Dayama")
// let str = loginmessage() // undefined just Logged in
console.log(str)

// here this ...num1 represents -> rest operator ->we say the argument passed was not 
// fixed so take all arguments and make it as if a bundle or array
function calculateCartPrice(...num1){
    return num1
}
// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

console.log(calculateCartPrice(100,240,500,120,2000))
const user = {
    icecream : "ButterScotch",
    price : 40
}
function handleobject(anyobject){
    console.log(`Icecream Type is ${anyobject.icecream} and the price is ${anyobject.price}`)
}

handleobject(user)

const myarr = [200,250,400,350]
function returnsecondval(getarr){
    return getarr[1]
}
console.log(returnsecondval(myarr))