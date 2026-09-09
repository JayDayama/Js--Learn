// const usermail = "jayd@email.ac"
const usermail = ""

if(usermail){
    console.log("got the user mail")
}
else{
    console.log("Provide uuser mail")
}

// Falsy Values

// false, 0 , -0 ,BigInt 0n , "" , null , undefined , Nan

// Truthy Values -> values which we automatically consider to be true

// "0" , 'false' , " " , [] , {} , function(){}
const myarr = []
if(myarr.length === 0){
    console.log("Array is empty")
}

const empty_obj = {}
//Object.keys(empty_obj) -> gives us an array of key's in the object
if(Object.keys(empty_obj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator(??) : null,undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// safety check for null inputs so we can have real values from db genereally value 
//returned from a function/ data base is taken in place of 10 as shown above
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 30

console.log(val1)

// Terniary operator
// condition ? true : false;

const iceteaprice = 100

iceteaprice <= 80 ? console.log("Less than 80") : console.log("Greater than 80")