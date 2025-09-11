function makeSandwich(raw,callback){
    console.log("bread")
    callback();
}

function stuffing(callback){
    console.log("stuffed");
    callback();
}

function grilled(callback){
    console.log("grilled")
    callback();
}

makeSandwich("raw",function(){
    stuffing(function(){
        setTimeout(grilled(), timeout);
    }){}
})