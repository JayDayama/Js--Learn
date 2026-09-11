// console.log(Math.PI)

// Math.PI = 4 // why can i not touch a value of an object

// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(descriptor)

// {
//   value: 3.141592653589793,
//   writable: false, -> we can never change this tp true to overwrite .PI value
//   enumerable: false,
//   configurable: false
// }

const coffee = {
    name : "caffè mocha",
    price : 550,
    isAvailabe : true,

    ordercoffee : function(){
        console.log("Order Coffee")
    }
}
console.log(coffee)
console.log(Object.getOwnPropertyDescriptor(coffee,"name"))
// {
//   value: 'caffè mocha',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(coffee , "name" , {
    // writeable : false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(coffee,"name"))
// // coffee.name = "macha"
// console.log(coffee)

for (const [key,value] of Object.entries(coffee)) {
    //because some objects are not iterateable by default
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
        // price : 550 -> we did not got name as we made enumerable : false
        // isAvailabe : true -> i.e we cant iterate over name
    }
}