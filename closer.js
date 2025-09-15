 function outer(){
            let value = 2;

        function inner(){
            console.log(value);
        }
        return inner;
        }

let res = outer();  //calling again res() which have now outer return which is inner
res(); // so we have still acces of outer lexical scope after even outer is sweep from the call stack. 

/* 
lexical scoping (acess of parent scope)
acess of parent scope and if value not found then parent moves to its parent scope known as scoping chanining hence child has the access of its parent scope whhether his parent remian or not.
*/

/* A closure is created when a inner function remembers can access the variables from its outer function (within enclosed func)scope, even after that outer function has finished executing. */

/* Variables : variables is a global scope variable that mean var can be access at anywhere even in other function scopes or other blocks

# it only respect function  boundary where var is declare inside a function not only in curly braces, only if function */
