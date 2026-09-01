//Object -> Singleton (using Constructors)

// const User = {} // -> give same output -> {}
const Facebookuser = new Object()
// console.log(Facebookuser)

Facebookuser.id = "ab123"
Facebookuser.name = "Natasha"
Facebookuser.isloggedIn = false

// console.log(Facebookuser)
const User = {
    email : "user@123google.com",
    fullname : {
        myName : {
            firstname : "Jay",
            lastname : "Dayama"
        }
    }
}

// console.log(User.fullname)
// console.log(User.fullname.myName)

const obj1 = {1 : 'a' , 2 : 'b' , 3 : 'c'}
const obj2 = {4 : 'a' , 5 : 'b'}
// const obj3 = {obj1,obj2} // we get obj in a obj we dont want this

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj1) // we see that our answer is stored in the obj1
// Works but using {} garuntees safety that an object will be rerturned no matter what

// {} -> this acts as the result will be stored here
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}//spread same as in array

// console.log(obj3)

const users = [
    {
        id : 1,
        email : "jd@gmail.com"
    },
    {
        id : 1,
        email : "md@gmail.com"
    },
    {
        id : 1,
        email : "yd@gmail.com"
    },
]
// console.log(users[1])
// console.log(users[1].email)

// console.log(Facebookuser)
// console.log(Object.keys(Facebookuser))
// // returns an array of keys hence we can loop thru them when and if needed
// console.log(Object.values(Facebookuser))
// console.log(Object.entries(Facebookuser))

// console.log(Facebookuser.hasOwnProperty('isloggedIn'))
// console.log(Facebookuser.hasOwnProperty('islogged')) // falseee


// Destructure:-

const Course = {
    coursename : "Java Script",
    Coursefee : "999",
    CourseTeacher : "Hitesh"
}

// Lets say i need the course teacher name multiple times i cant go on doing 
// Course.CourseTeacher multiple times hence we do :
//or one can directly do {Course} in a function variable so i can easily access object members
//const {CourseTeacher} = Course // also validd

const {CourseTeacher : teacher} = Course  //Destructuring

console.log(teacher)

// ***** JSON *****

//In This Format We Recieve Our API's
// {
//     "name" : "Jay",
//     "CourseName" : "Java Script",
//     "price" : "Free"
// }

// also this way:
// [
//     {},
//     {},
//     {}
// ]