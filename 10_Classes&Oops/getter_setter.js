class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    // get -> get/access some property outside of the class
    get password(){
        return `${this._password}jay`
        // return this._password.toUpperCase()
    }
    // set some value to property/variable inside the class
    set password(value){
        //constructor is only setting the email value as we have overwritten the password set
        this._password = value

        // // both the constructor and setter are racing to set the value hence call stack space exceeded
        // this.password = value.toUpperCase()
    }
}

const jay = new User("jay.123@xyz.com" , 'abc')
console.log(jay.password)
console.log(jay.email)