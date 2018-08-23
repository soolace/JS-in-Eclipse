/**
 * testing and learning, what is scope
 */

var global = "global variable";
var anotherGlobal ="another global variable";

function functionScope () {

    var global = "function1";
    console.log(global)
    var scoped = "function2";

    function innerScope () {
        console.log(scoped);
        console.log(anotherGlobal);
    }

    innerScope();

}


console.log(global);
console.log(anotherGlobal);



functionScope();