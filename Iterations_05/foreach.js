const coding = ["cpp" , "js" , "java" , "python"]
//for each is a high order array loop function


// coding.forEach( function (val) {
//     console.log(val)
// } )
//we need a call back function hence it shouldnt have a name
// forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
//these callbackfn are smart they know where to start from what is my length of array,..

// coding.forEach( (item) => {
//     console.log(item)
// } )

// function printme(item) {
//     console.log(item)
// }

// coding.forEach(printme) // we dont need to execute function here just give the refrence

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// } )

const mycoding = [
    {
        languagename : "Java Script",
        filename : "js"
    },
    {
        languagename : "C++",
        filename : "cpp"
    },
    {
        languagename : "python",
        filename : "py"
    },
]

mycoding.forEach( (item) => {
    // here my item will point to each object one by one
    // console.log(item.languagename + ' -> ' + item.filename)
} )

const values = coding.forEach( (item) => {
    console.log(item)
    // the for each loop function will not alow us to return anything
    return item // whatever we try wwe cant store this data to someplace
} )

console.log(values) // -> undefined