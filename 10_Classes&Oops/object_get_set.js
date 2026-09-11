const User = {
    // _ says I'm defining a private property
    _email : 'jay@jd.com',
    _password : "abc",

    //email is a private property here get brings our property from memory and does whaterver needs to be done
    get email(){
        return this._email.toUpperCase()
    },
    //this is not a method but a property as we are using set/get so tschinicalyy we dont need to do email() while accessing 
    set email(value){
        this._email = value
    }
}

const coffee = Object.create(User)
console.log(coffee.email)