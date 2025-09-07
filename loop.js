let arr1 = [1,2,3,4,5,6];
/* Simple For loop */
for(let i = 0; i<arr1.length; i++){
    console.log(arr1[i]);
}

/* for of loop */
for (let i of arr1){
    console.log(i)
}
/* for in loop */
for (let i in arr1){
    console.log(arr1[i])
}

// // Object Iteration

let person = {
    name:"sandeep",
    age:26,
    isemployed:true,
}

// /* for in loop */ we have to specify index in square bracket
for (let key in person){
    console.log(key + ":"+ person[key])
}
// // /* for of loop */  for of loop works only  iterables node loop.js not on object

/* 1. Multiplication table */

for(let i=1; i<=10; i++){
    console.log(2*i)
}

/* 2. factorial of a number */

let num = 5;
let fac = 1;

for(let i=1; i<=num ;i++){
    fac*=i;
}
console.log(fac);

/* 3. sum of first n natural no. */

let num1 =5;
let sum = 0;

for(let i=1; i<=num1; i++){
    sum+=i;
}
console.log(sum)

/* 4. Reverse the digit of a number */

let num3 = 12345;
let rev = 0;

while (num3 > 0) {
    let digit = num3 % 10;       // get last digit
    rev = rev * 10 + digit;     // append digit
    num3 = Math.floor(num3 / 10); // remove last digit
}

console.log("Reversed number: " + rev);

/* 5. print even numbers from 1 to 50 */

for(let i=1; i<=10; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

/* 6. count digits in a number */

let num4 = 12345;
let count = 0;
Math.abs(num4);
while(num4>0){
    count++;
    num4 = Math.floor(num4/10)
}
console.log(count);

/* 7. fibonacci series */

let n = 10;
let a = 0, b= 1;
for(let i=1; i<=n; i++){
    console.log(a)
    let c = a+b;
    a=b;
    b=c
}

/* 8.sum of digits */

let num5 = 123;
let sum1 = 0;
while(num5>0){
    sum1+= num5%10;
    num5 = Math.floor(num5/10);
}
console.log(sum1);

/* 9. pattern printing pyramid */

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let str = " ".repeat(rows - i);  // spaces
    str += "*".repeat(2 * i - 1);    // stars
    console.log(str);
}


// let arr1 = 5

// // for(let i in arr1){
// //     console.log(arr1[i]*2);
// // }
// let i = 5;
// let ans = 1;
// for(let i=1; i<5 ; i++){
//     ans = ans*i;
//     console.log(ans);
// }