function outer(){
    var value = 2;

    function inner(){
        console.log(value);
    }
    return inner;
}

let res = outer();
console.log(res);

/* 
lexical scoping (acess of parent scope)
acess of parent scope and if value not found then parent moves to its parent scope known as lexical scoping chanining
*/