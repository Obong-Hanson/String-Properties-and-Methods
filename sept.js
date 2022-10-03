//functions in javascript are first class objects or citizens
//what that means is that we can store functions in a variable, pass functions to another function as an argument, and w an also return a function from another function.

//If the function accepts another funtion as an argument, it is called a higher order function.

//The callback function is the function we pass into another function.


function greetMorning(name){
    const myName = "Hanson"
    console.log(`good morning ${name}, my name is ${myName}`);
}

function greetAfternoon(name){
    const myName = "Hanson"
    console.log(`good afternoon ${name}, my name is ${myName}`);
}

greetMorning("Jude")
greetAfternoon("Sam")

//The problem with this code block is the number of repititions we get to make while greeting. Imagine we had to greet at every time, or there is a name change, it then means we will have to come back to this code block and start changing names one after the other. headache!! This is where the callback function comes in.

function greet(name, cb){
    const myName = "Hanson"
    console.log(`${cb(name)}, my name is ${myName}`);
 
} //this is our higher order function (greet)

function morning(name){
    return `good morning ${name.toUpperCase()}`
} //callback function

greet("Jude", morning);
greet("Sam", morning);

//Working on call back function



//ARRAY ITERATIORS (for each, map, filter, reduce)

/*FOR EACH
For each does not return a new array
*/

const people = [
    {name: 'bob', age: 30, position: 'developer'},
    {name: 'Hanson', age: 100, position: 'designer'},
    {name: 'Ime', age: 90, position: 'CEO'},
];


function showPerson(person){
console.log(person); //tells us about the person (from the object that carries people)
console.log(person.position.toUpperCase()); //gets the person's position and returns it as uppercase.

}

people.forEach(function(person){
    console.log(person.position.toUpperCase());
});
//here, we used the call back function for the second code block




// //MAP
// //It returns a new array but, unike filter, it does not change the size of the new array

const ages = people.map(function(){})