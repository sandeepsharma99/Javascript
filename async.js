const p1 =  Promise.resolve("success")
const p2 =  Promise.reject("reject")
const p3 =  Promise.resolve("success")

Promise.all([p1,p2,p3])  //retuen first reject promise
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

Promise.allSettled([p1,p2,p3])  //return an array of object conataining status and value
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
Promise.race([p1,p2,p3])  //return values of promise till first reject
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

Promise.any([p1,p2,p3])  //return value of all promise
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})