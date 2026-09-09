//make sure before and while comparision that both should have same data type

//Just avoid these type of comparisions and checks
console.log("02" > 1)//Not Predictable

console.log(null == 0)//this is a check not a comparision hence unpredictable
console.log(null >= 0)//here null is converted to 0 hence true

// === -> doesne let different data type to get converted simply returns false if they differ
console.log("2" === 2)//->false