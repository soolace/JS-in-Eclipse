/**
 * practice
 */
var animal = {
	eats : true
};

function Rabbit(name) {
	this.name = name;
}

Rabbit.prototype = animal;

var rabbit = new Rabbit("Häschen");
console.log(rabbit.eats);
