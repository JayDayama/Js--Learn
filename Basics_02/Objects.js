//Singleton
// Object.create --> Constructor

// Object Literals
const mysym = Symbol("Key1")
const User = {
    name : "Jay",
    "Full name" : "Jay Dayama",
    age : 19,
    // mysym : "MyKey1", // if we try to print its type it will give us string
    [mysym] : "MyKey1",//correct way of using a symbol
    City : "Surat",
    Email : "jaydayama@example.com",
    isloggedin : false,
    LastLogIn : ["Monday","Friday","Saturday"],
}

console.log(User.name)
// console.log(User.Full name) // Will give error because we cant use this imstead :-
console.log(User["Full name"])

console.log(User[mysym])
User.name = "Yash"
User["Full name"] = "Yash Dayama"
// console.log(User["Full name"])
// Object.freeze(User) // stops from changing any values in the User Object
// User["Full name"] = "MD Dayama"
console.log(User)

User.greeting = function(){
    console.log("Hello User")
}
User.greeting_2 = function(){
    console.log(`Hello User ${this.name} `)
}

console.log(User.greeting)
//->[Function (anonymous)] -> function isnt executed it is just the refrence
console.log(User.greeting())
console.log(User.greeting_2())