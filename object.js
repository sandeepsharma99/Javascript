// let person = {
//     firstName:"john",
//     lastName: "Doe",
//     age:50,
//     eyecolor:"blue",
//     address :{
//         street:"123 main strt",
//         city:"new york",
//         state:"NY",
//     }
// }
// let person1 = person;

// person1.eyecolor = "black";
// console.log(person1) 
// console.log(person)

/* unable to create deep copy changes are affecting original */

/* spread operator -  shallow copy */

// let person1 = {...person}

// person1.eyecolor = "black";

// console.log(person1) 
// console.log(person)

// but there is problem it only copy till first layer

/* Structure clonning - deep copy */

// let person1 = structuredClone(person);

// person1.address.city = "georgia";

// console.log(person1) 
// console.log(person)

/* using json.parse(json.stringify(person))method */

// let person1 = JSON.parse(JSON.stringify(person))  // method2

// person1.address.city = "georgia";

// console.log(person1) 
// console.log(person)

// function sum(...args){
//     return a+b+c+d;
// }

// let res = sum(1,2,3)
// console.log(res)



function sum (...args){
    let sum = 0;
    for(let i = 0; i < agrs.length; i++){
        sum+=args[i];
    }
    return sum;
}

let res = sum(2,3,4,5,6,7,8,9);
console.log(res)