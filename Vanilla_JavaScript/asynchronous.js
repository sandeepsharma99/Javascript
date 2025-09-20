const p1 = Promise.resolve("resolved1")

const p2 = Promise.reject("reject");
const p3 = Promise.resolve("resolve2");

// Promise.all([p1,p2,p3])

// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

Promise.allSettled([p1,p2,p3])

.then((rand)=>{
    console.log(rand)
})
.catch((err)=>{
    console.log(err)
})

