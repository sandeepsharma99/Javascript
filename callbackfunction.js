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
            // console.log("sandwich is ready");
        })
    })
})