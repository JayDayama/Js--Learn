const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc , curr_val) {
//     console.log(`acc : ${acc} and cuur_val : ${curr_val}`)
//     return acc + curr_val
// } ,0) // 0 -> initial value kya honi chahiye accumulator ki

const mytotal = mynums.reduce( (acc,curr_val) => acc+curr_val ,0)

// console.log(mytotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total_price = shoppingCart.reduce( (acc,item) => acc + item.price ,0)
console.log(total_price)