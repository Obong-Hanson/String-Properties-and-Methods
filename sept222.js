//ARRAY ITERATIORS (for each, map, filter, reduce)

/*FOR EACH
For each does not return a new array
*/

const people = [
    {name: 'bob', age: 30, position: 'developer'},
    {name: 'Hanson', age: 100, position: 'designer'},
    {name: 'Ime', age: 90, position: 'CEO'},
]


function showPerson(person){
console.log(person);
}

people.forEach{showPerson}