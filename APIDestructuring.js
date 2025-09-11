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

