function makeSandwich(raw, callback){  //creating  a function named "makeSandwich passing two argument raw and a callbackfunction name callback "
    // console.log("bread done") // 
    callback();
}

function stuffing(callback){
    // console.log("stuffing done")
    callback();
}

function grilling(callback){
    console.log(callback);
    // console.log("grilled done");
    callback();
}


makeSandwich("raw",function(){
    stuffing(function(){
        grilling(function(){
            console.log("sandwich is ready")
        })
    })
})


// makeSandwich("raw",function(){
//     stuffing(function(){
//         grilling(function(){
//             // console.log("sandwich is ready");
//         })
//     })
// })


// function sum (a,b,cb){
//     let res = a+b;
//     cb(res);
// }
// function printValue(res){
//     console.log(res);
// }

// sum(2,3,printValue)



/* Callback is the foundation of Asynchronous programming  
# callback function is a function passed into another function as an argument, which is then invoked inside the outer function 
*/

// Callback Hell (Pyramid of Doom)


/* Now passing vs attachingthe function   (callback--> promises )*/