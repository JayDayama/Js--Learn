
// if(true){
//     let a = 100
//     const b = 203
//     var c = 123
// }

// console.log(a) throws error as 'a' is used outside of its scope
// console.log(b) throws error as 'b' is used outside of its scope
// console.log(c) 
// prints this means c is being used widely/globally outside of its scope
//Hence we dont use var
let a = 200 // Global scope
if(true){
    let a = 120// Block scope
    const b = 239
    console.log("Inner val of 'a' : ",a)
}

console.log(a)
