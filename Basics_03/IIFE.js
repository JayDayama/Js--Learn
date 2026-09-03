// Immediately invoked function expressions (IIFE)
// The One's that execute immediately
// we dont want global pollution (global var use na ho idhar)

(function database(){
    // Named IIFE
    console.log("DB Connected")
})();
// first () is for funciton definition and the second one is for function execution
//if we dont add ';' at last IFFE wont know where to stop
((name) => {
    console.log(`DATABASES IS HERE Mr.${name}`)
})("Jay") //here we are directly making the function call instead of calling it form somewhere else
// database()