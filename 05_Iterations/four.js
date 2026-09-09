// // const coding = ["cpp" , "js" , "java" , "python"]

// // const values = coding.forEach( (item) => {
// //     console.log(item)
// //     // the for each loop function will not alow us to return anything
// //     return item // whatever we try wwe cant store this data to someplace
// // } )

// // console.log(values) // -> undefined

// const mynums = [1,2,3,4,5,6,7,8,9,10]

// // const newnums = mynums.filter( (num) => num > 4 )
// // In filter we have a call back function which returns some value if they satisfy the condition in call back funtion

// const newnums = []

// mynums.forEach( (num) => {
//     if(num > 4) newnums.push(num)
// } )

// console.log(newnums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter( (bk) => bk.genre == 'History' )

  console.log(userbooks)

  userbooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre == 'History' )

  console.log(userbooks)