let name = "Jay"
let college_year = 3

// console.log(name + " College year is " + college_year)//Highly uneasy to read

//   String Interpolation
console.log(`Hello my Name is ${name} and my current college year is ${college_year}`)

const gamename = new String('Bgmi-India-jay-yash')

console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toLowerCase())
console.log(gamename.toUpperCase())
console.log(gamename.charAt(3))
console.log(gamename.indexOf('i'))

const newname = gamename.substring(0,4)
console.log(newname)
const revname = gamename.slice(-8,4)//10 - 8 ->starting index
console.log(revname)

const newstr = "    Jay     "
console.log(newstr)
console.log(newstr.trim())

// https://Jay.com/jay Dayama(browser changes the space)-> https://Jay.com/jay%20Dayama
const url = "https://Jay.com/jay%20Dayama" 

console.log(url.replace('%20' , '-'))
console.log(url.includes('Jay'))

console.log(gamename.split('-')) // --> output:- [ 'Bgmi', 'India', 'jay', 'yash' ]