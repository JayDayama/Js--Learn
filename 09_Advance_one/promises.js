const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls,cryptography, network;
    setTimeout(function(){
        console.log("Async Task is completed");
        // we need to execute resolve to connect it to : 'then'
        resolve();
        // this executes only and only when all the tasks in promise are completed
        // console.log("Task!!!")
    },1000)
})

//.then() wale function mei hi humare promise wale function ki value return hoti h
// Consumption of the promise

//.then() is directly related to resolve
promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        //   ***we do not do like return or somthing to get values***
        resolve({username : "Jay" , email : "jaydayama123@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//.catch() is directly related to our reject
// when promise is rejected .catch() catches it


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let errorPresent = false
        if(!errorPresent){
            resolve({username : "Jay" , password : "123456"})
        }
        else{
            reject('Error : Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;// this value is returned to the next .then() function
}).then(((myUsername) => {
    console.log(myUsername);
})).catch((error) => {
    console.log(error);
}).finally( () => console.log("Promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let errorPresent = true
        if(!errorPresent){
            resolve({username : "JavaScript" , password : "123456"})
        }
        else{
            reject('Error : Js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    //to catch rejection we use : 
    try {
        const response = await promiseFive // we wait for the promise to return
        console.log(response);
    } catch (error) {
        console.log(error);
    }

    //we use this when we know that our promise will not be rejected for sure
    // const respone = await promiseFive
    // console.log(response);
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response)

        const data = await response.json();
        // const data = response.json(); -> this takes time too hence await
        console.log(data);

    } catch (error) {
        console.log("E" , error);
    }
}

// getAllUsers();

fetch('https://api.github.com/users/yash-dayama')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log("E : ", error));


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log("E : ", error));