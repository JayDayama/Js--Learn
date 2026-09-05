const user = {
    username : "Jay",
    regfee: 999,
    //both username and regfee are current context because they are in this particular scope hence to access them in sub-function we use this keyword

    welcome_message : function(){
        console.log(`${this.username} , welcome to my website`)
        console.log(this) // prints our all the context of ** user function **
    }
}

user.welcome_message()
user.username = "Yash" // we change context of user name using user obj hence current context changed
user.welcome_message()

// console.log(this) // -> {}

// function check(){
//     username = "Jay dAy_aMa"
//     console.log(this.username)
// }

// check()

const arrow_func = () => {
    username = "Jay"
    console.log(this.username) // we cant use 'this' in arrow function
    console.log(this)
}

// arrow_func()

// () => {}  Syntax of arrow function

// const addtwo = (num1,num2) => {
//     return num1+num2
// }

// const addtwo = (num1,num2) => num1+num2
// const addtwo = (num1,num2) => (num1+num2)

//Implicit return this function we just need to return num1+num2 we dont need to say actually that return num1+num2
//Implicit means(here) i dont need to write return maine mann liya as it is just a one liner funtion
//{} in this curly brackets i ** NEED ** to use return
const addtwo = (num1,num2) => ({username : "Jay"})


// addtwo(3,5)
console.log(addtwo(3,5))