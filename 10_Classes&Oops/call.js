function setUsername(username){
    // (say) complex DB calls
    this.username = username;
    console.log("Called")
}

function createUser(username,email,password){
    // setUsername(username) // it is just sending the refrence
    //after this function finishes its task all the values go away from call stack
    // we need to hold these values
    //createUser { email: 'jay@gmail.com', password: '1234' }
    // call ho hi nhi rha warna mujhe username set kiya hua mil jata
    // we should have the access/refrence of the variable setted
    
    setUsername.call(this,username) // passing current context this
    this.email = email
    this.password = password
}

const Jay = new createUser("Jay" , "jay@gmail.com" , "1234")
console.log(Jay)