let sal = [1,2,3,4,5,6];

let sal2 = [10,20,30,40,50]

function calcTenPercentaage(num){
    return num*0.1;
}

function calcTwentyPercentage(num){
    return num*0.2;
}

let res = [];

sal.prtototype.calcuTax= function(calfun){
    for(let i=0; i<num.length; i++){
        res.push(calfun[i])
    }
    return res;
}
console.log(sal.calcuTax(calcTenPercentaage));