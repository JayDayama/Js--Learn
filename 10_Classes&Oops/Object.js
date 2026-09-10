function multiplybe5(num){
    return num*5
}

multiplybe5.power = 2;

console.log(multiplybe5(5));
console.log(multiplybe5.power);
console.log(multiplybe5.prototype); // properties + context -> both are available

function createuser(username,price){
    this.username = username
    this.price = price
}

//humne prototype mei humare pasand ka function add kar diya :-

createuser.prototype.increment = function(){
    //whoever called you do their work
    this.price++;
}
createuser.prototype.printMe = function(){
    console.log(`Price of ${this.username} is : ${this.price}`);
}

// const tea = createuser("tea" , 100);
// till now we dont know that new prototype is added we need to use new to make the program know about these new prototypes

const tea = new createuser("tea" , 100);
const coffee = new createuser("Coffee" , 350);

// javascript says we dont need to say go to prototype and access the member or something u can directly access it
tea.printMe()

coffee.increment()
coffee.printMe()

// *** Some Important Notes ***

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/