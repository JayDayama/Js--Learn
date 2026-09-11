class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const userone = new User("jay dayama","jay@gmai.com","123");

console.log(userone.encryptpassword());
console.log(userone.changeusername());


// if not using class :

// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptpassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeusername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const userone = new User("jay dayama","jay@gmai.com","123");
// console.log(userone.encryptpassword());
// console.log(userone.changeusername());