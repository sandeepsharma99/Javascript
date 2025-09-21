const response = fetch ("https://api.github.com/users/im-lakshyaa")   // fetch return a promise object which we convert then to json format.
response.then((res)=>{
    let data = res.jason();
    return data;
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

/* Promise constructor method  */
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

/* Promise Methods */

Promise.allSettled([p1,p2,p3])  /* Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes. */

Promise.all([p1,p2,p3]) /* Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects. */

Promise.any([p1,p2,p3])  /* Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError */

Promise.race([p1,p2,p3])  /* gives resolves or rejects as soon as the first promise settles.  */

.then((rand)=>{
    console.log(rand)
})
.catch((err)=>{
    console.log(err)
})

