
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

function one(){
    const username = "Jay"

    function two(){
        const website = "Github"
        console.log(username)
        //Child function can access everything of parent function
        // but parent function cant do the same 
    }
    // console.log(website) -> wont work because we used website outside of its scope
    //ishi line pe error mil gaya isliye niche wala call execute hua hi nhi

    two() // -> yeh wala
}

one()


console.log(addone(5))
function addone(num){
    return num+1
}

// console.log(addtwo(5))//throws error
const addtwo = function(num){ // Hoisting ->we stored out function result in a variable
    return num+2
}
console.log(addtwo(5))