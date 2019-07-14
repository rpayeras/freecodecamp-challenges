/*
All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // => object
Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
// returns true
How is this useful? You may recall the hasOwnProperty method from a previous challenge:

let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // => true
The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain.

In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck.

Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.


Modify the code to show the correct prototype chain.
*/

function Dog(name) {
        this.name = name;
}

const beagle = new Dog('Snoopy');

Dog.prototype.isPrototypeOf(beagle); // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
