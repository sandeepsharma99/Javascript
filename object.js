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

let response1 = {
    status:300,
    header:{
        type:"json",
        version:1.1,  
    },
    body:{
        name:"vikas",
        age:30,
        isemployed:true,
        address:{
            street:"123 main street",
            city:{
                a:123,
                colony:"abc",
            },
            state:"NY",
        },
        footer:{
            type:"json",
            version:1.1
        },
    },
};

let {status}= response1;
console.log(status);

let {body: {isemployed}} = response1;
console.log(isemployed);

let {body:{address:{city:{colony}}}} = response1;
console.log(colony);

let {body:{footer:{type}}} = response1;
console.log(type)




// function sum(...args:any[]):Number
// function sum(...args){

// }
