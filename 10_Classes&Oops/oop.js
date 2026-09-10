const user = {
    username : "Jay",
    isloggedIn : true,
    entries : 9,

    getuserdetails : function(){
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}
// user.getuserdetails();
// console.log(this);

// Constructor function : -> new -> this gives us new instance/copy everytime
// -> new this allows us to create multiple obj instances using just one object
// eg : const promiseone = new Promise() so that previous values dont get affected

function User(username, logincount, isLoggedIn){
    //object mei passed value dal di
    // variable = passedvalue
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn

    return this
}

const userone = new User("Jay",9,false);
const usertwo = new User("Yash",12,true);
// const usertwo = User("Yash",12,true); // this is overwritting our values

console.log(userone);
console.log(usertwo);