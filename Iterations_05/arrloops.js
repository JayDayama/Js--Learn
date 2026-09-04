// for of loop :-

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Jay"
for (const greet of greetings) {
    // console.log(`Current character is ${greet}`)
}

// Maps
const map = new Map()
map.set("In" , "India")
map.set("Rs" , "Russia")
map.set("Fr" , "France")
map.set("In" , "India")

console.log(map)

for (const [key,value] of map) {
    // console.log(key + ' -> ' + value)
}

const myObj = {
    "game1" : "Need for speed-most wanted",
    "game2" : "Clash of Clans"
}

// for (const [key,value] of myObj) {
//     console.log(`My favourite game is ${value}`)
//     //myObj is not iterable using for of loop
// }

const myobject = {
    js : "Java Script",
    cpp : "C++",
    py : "Python"
}

for (const key in myobject) {
    // console.log(key)
    //myobject[key] -> in myobject find the value attached to this 'key'
    console.log(`${key} is shortcut for ${myobject[key]}`)
}

for (const key in arr) {
    // console.log(key) // this is just giving me the keys / index
    console.log(`We have ${arr[key]} at the index ${key}`)
}

for (const [key,value] in map) {
    console.log(key , value) // doesnt work because map isnt iterateable
}