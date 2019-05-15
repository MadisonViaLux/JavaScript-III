/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Scope means the "this" will 
read past our code into the browser 
itself to find the item it is trying to 
define.

* 2. Implicit Binding is like Global 
Scope, but when you are calling for it, 
you use the object you want to call, 
and then a dot, then the function (or 
Method as it is also called) that is 
INDIDE the object you are calling, then 
a proporty you want for that function, 
and then whatever is left of the dot is 
what the "this" is bound too.

* 3. BINDING takes the 'this' from a 
function and allows it to be bound to an 
object.

* 4. Explicit Bonding alows you to bond in detail.

*
* write out a code example of each explanation above
*/

// Principle 1

function example(beds){
    console.log(this);
    return beds;
}

example("All of them");

// Principle 2

Object.function('proporties')



// Principle 3

// constructor function
function testing(greeter){
    this.greeting = 'Hello there, ';
    this.greeter = greeter;
//     Method
    this.talking = function(){
        console.log(this.greeting + this.greeter);
//                    line 40         line 41   
        console.log(this);
//       allows to BIND
//           objects
    }
}
// Calling it like this BINDS the function on line 39, now with the property, to a const making it an object.
const Leggy = new testing('Army');
// (basically saying that this now holds all the code from the function testing)
// this.greeting = 'Hello there, ';
// this.greeter = greeter;
// //     Method
// this.talking = function(){
//     console.log(this.greeting + this.greeter)
// //                    line 40         line 41   
//     console.log(this)
// //       allows to BIND
// //           objects
// }

const Army = new testing('Leggy');
// this.greeting = 'Hello there, ';
// this.greeter = greeter;
// //     Method
// this.talking = function(){
//     console.log(this.greeting + this.greeter)
// //                    line 40         line 41   
//     console.log(this)
// //       allows to BIND
// //           objects
// }

// so by calling these-
Leggy.talking();
Army.talking();
// we are calling the function INSIDE of testing, giving the result of-
// "Hello there, (Army/Leggy)"


// Principle 4

function testing(greeter) {
    this.greeting = 'Hello there, ';
    this.greeter = greeter;
    this.talking = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}


const Leggy = new testing('Army');
const Army = new testing('Leggy');

// whenever you're using .call .apply .bond methods, it allows for more detailed Bonding.
Leggy.talking.call(Army);
Army.talking.apply(Leggy);


Leggy.talking();
Army.talking();