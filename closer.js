function outer(){
    var value = 2;

    function inner(){
        console.log(value);
    }
    return inner;
}

let res = outer();
console.log(res);