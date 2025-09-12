// function greet(name, callback){
//     console.log(`hello ${name}`);
//     callback();
// };

// greet("sndeep",function(){

// })

// function addition(a,b){
//     return a+b;
// }
// function subtraction(a,b){
//     return a-b;
// }
// function multiplication(a,b){
//     return a*b;
// }
// function division(a,b){
//     return a/b;
// }

// function calculate(a,b,callback){
//     console.log(callback(a,b));
// }

// calculate(5,3,multiplication)

// function displayResult(a,b){
//     console.log(a+b);
// }

// function add(a,b,cb){
//     cb(a,b);
// }
// add(2,3,displayResult);

let arr = [1,2,3,4,5]

function operation(arr){
console.log(arr*2);
}

Array.prototype.processArray = function(cb){
    let newArr = []
    for(let i=0; i<this.length; i++){
        newArr.push(cb(this[i]))
    }
    return newArr;
};
arr.processArray(operation);
