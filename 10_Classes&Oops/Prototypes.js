// let myname = "Jay          "
// let home = "Surat        "

// console.log(myname.truelength)

let myheroes = ['Thor' , 'SpiderMan']
let heropower = {
    Thor : 'Hammer',
    SpiderMan : 'Web-shooters',
    getspidepower : function(){
        console.log(`Spidy power is ${this.SpiderMan}`);
    }
}

//in the end all things go thru our object why not just create method/property directly in object only

Object.prototype.jay = function(){
    console.log(`jay is present in all objects`)
}

Array.prototype.hellojay = function(){
    console.log(`Jay says Hello`)
}

// heropower.jay()
myheroes.jay()

myheroes.hellojay()

// heropower.hellojay()// cant access hellojay as we included it only in Array

// Inheritance 

const User = {
    name: "Jay",
    email: "jay@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
//this is our prototypical inheritance

// Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let otheruser = "JayDayama          "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

otheruser.truelength();
"YashDayama      ".truelength();
"IceCream     ".truelength();