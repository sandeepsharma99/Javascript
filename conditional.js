// let num = 11;

// if(num%2 == 0){
//     console.log("even no.");
// }else{
//     console.log("odd no"); 
// }

// let age =16;

// // if(age>18 || age==18){
// //     console.log("you can vote..")
// // }
// // else{
// //     console.log("yo cannot vote...")
// // }



/* 1. Eligible to vote  */    // /* ternary operator */
let age = 16;
console.log(age >18 ? "you can vote " : "you can't vote")

/* 2. Day of week */



let days = 5;

switch (days){      /* switch statement */
    case 1:
        console.log("monday");
    break;
    case 2:
        console.log("tuesday");
    break;
    case 3:
        console.log("wednesday");
    break;
    case 4:
        console.log("thrusday");
    break;
    case 5:
        console.log("friday");
    break;
    case 6:
        console.log("satarfday");
    break;
    case 7:
        console.log("Sunday");
    break;
}

let marks = 80;

switch(true){
    case marks>=91:
        console.log("GRADE-A+");
        break;
    case marks>=81:
        console.log("GRADE-A");
        break;
    case marks>=71:
        console.log("GRADE-B+");
        break;
    case marks>=61:
        console.log("GRADE-B");
        break;
    default:
        console.log("fail");
    
}

/*4. Maximum of three number
    Find the largest of three number using if statement. 
*/
let a = 30;
let b = 20;
let c = 80;

if(a>=b && a>=c){
    console.log("a is largest")
}else if(b>=c && b>=a){
    console.log("b is largest")
}else if(c>=a && c>=b){
    console.log("c is largest")
}

/* 5. Check vowel or consonat 
      check if a given character is a vowel or a consonant*/

let char = "g";

if(char=="A" || char=="E" || char=="I" || char=="O" || char=="U"){
    console.log("VOWEL")
}else{
    console.log("consonant")
}

/* 6. positive negative or zero
      check if given no. is positive negative or zero */

let num = 0;

if(num>0){
    console.log(num +" is positive")
}else if(num<0){
    console.log(num +" is negative")
}else{
    console.log(`${num} is zero`)
}

/* 7. Calculator program 
      perform addition subtraction multiplication or division based on user input */

let num1 = 25;
let num2 = 6;

let operator = "*"; 

switch(operator){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;    
}

/* 8. Eligible to vote */

let ages =16;

if(ages>18 || ages==18){
    console.log("you can vote..")
}
else{
    console.log("yo cannot vote...")
}

/* 9. Triangle type
      Determine the type of triangel (Equilateral isosceles or scaler) based on the length of its sides */

let p = 30;
let q = 10;
let r = 30;

if(p == q && q==r ){
    console.log("it is an equilateral triangle")
}else if(p==q || p==r){
    console.log("it is an isosceles triangle")
}else{
    console.log("scaler Triangle")
}