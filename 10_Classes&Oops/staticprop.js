class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    // we dont want to give access of Id to everyone we can do tasks using id in here nothing else
    static createId(){
        return `123`
    }
}

const JS= new User("Js")
// console.log(JS.createId())

class teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const Iphone = new teacher("Iphone","i@phone.com")
Iphone.logMe()

// console.log(Iphone.createId()) -> no access