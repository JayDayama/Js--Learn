const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.map( (num) => num + 10 )

// chaining

const newnums = mynums
                    .map( (num) => num * 10 )//next wale ke liye num ki value yeh hogi(num*10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40 )

console.log(newnums)