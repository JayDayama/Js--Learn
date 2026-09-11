class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username }`)
    }
}

// extend is for teacher class we are extending our class to user class
class teacher extends User{
    constructor(username,email,password){
        super(username);
        //go to your super class assign your username and also can access username here in this class too
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A New Course was added by ${this.username}`)
    }
}

const myvari = new teacher("Jay" , "jay123@gmail.com", "123456");
myvari.addCourse()
myvari.logMe()

const myVari2 = new User("Yash")
// myVari2.addCourse() -> User doesnt have access to our addcourse
myVari2.logMe()

console.log(myvari instanceof teacher)
console.log(myvari instanceof User)