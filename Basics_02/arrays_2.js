const marvel = [ "Thor" , "IronMan" , "Spiderman"]
const DC = ["Superman", "Batman" , "WonderWoman"]

// marvel.push(DC)
// console.log(marvel)
const allhero = marvel.concat(DC)
console.log(allhero)

const newhero = [ ...marvel , ...DC]
// ...marvel -> makes every ele of marvel as an individual element

console.log(newhero)

const otherarr = [1,2,3,[1,2,4],4,5,6,[1,2,[3,4,5]]]
const real_other = otherarr.flat(Infinity)
console.log(real_other)
console.log(Array.isArray("JAY_DAYAMA"))
console.log(Array.from("JAY_DAYAMA"))
console.log(Array.from({name : "JAY_DAYAMA"})) // -> []

let s1 = 100
let s2 = 200
let s3 = 500
let s4 = 300

console.log(Array.of(s1,s2,s3,s4))
