// Date

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(typeof myDate)

// let mycreateDate = new Date(2026, 0, 45)
// 0 i.e jan mei 31 days therfore it prints 14 feb
// let mycreateDate = new Date(2026, 6, 22, 5, 30)
let mycreateDate = new Date("2026-07-22")
console.log(mycreateDate.toLocaleString())

let Timestamp = Date.now()

// console.log(Timestamp)
// console.log(mycreateDate.getTime())
// 1st Jan 1970 se uss Date tak time in mili second

console.log(Math.floor(Date.now()/1000));//for value in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default' , {
    weekday: "long"
})
console.log(newDate.toLocaleString())