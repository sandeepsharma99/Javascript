let salary = [100,200,300,400,500];

function calculateTenPercent(i){
    return i*0.1;
}

Array.prototype.calculateTax = function(callback){
    let res = [];
    for(let i=0; i<this.length; i++){
        res.push(callback(this[i]))
    }
    return res;
}

// let finaloutput = calculateTax(salary,calculateTenPercent)
console.log(salary.calculateTax(calculateTenPercent));