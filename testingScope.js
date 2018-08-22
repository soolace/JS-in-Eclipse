/**
 * testing and learning, what is scope
 */

var global = "this is a global variable";
var anotherGlobal = "this is also a global variable";

function functionScope () {

    var global = "this is the function scope";
    console.log(global)
    var scoped = "this is also a function scope";

    function inner () {
        console.log(scoped);
        console.log(anotherGlobal);
    }

    inner();

}


console.log(global);
console.log(anotherGlobal);


functionScope();
inner(); 