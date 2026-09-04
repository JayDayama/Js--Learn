// for:-

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
}

for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`)
    for(let j=1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myarr = ["Thor" , "IronMan" , "Hulk" , "Doctor-Strange"]

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element)
}

for(let index = 1; index <= 30; index++){
    if(index == 13){
        console.log(`${index} is my favourite number`);
        // break;
        continue; // 13 needs special recognition from my side
        // Hence :-
        // Value of i is: 12
        // 13 is my favourite number
        // Value of i is: 14
    }
    console.log(`Value of i is: ${index}`)
}