/*Learning report for the first week of October*/

//Filter
//Filter can manipulate the size of the new array.
//it returns a new array
//it returns based on condition

const people = [
    {name: 'bob', age: 30, position: 'developer'},
    {name: 'Hanson', age: 100, position: 'designer'},
    {name: 'Ime', age: 90, position: 'CEO'},
    {name: 'efe', age: 60, position: `web designer`}
];

const youngPeople = people.filter(function(person){
    return person.age <= 50
    //The condition here is to filter out young people and we chose 50 as the benchmark. Clearly, it will return only Bob because he met the condition
})

console.log(youngPeople);


//if we decide to play around with the filter method and decide to use a property that is not there, we get a false value

const graphicsDesigner = people.filter(function(person){
    return person.position === `graphics designer`
})

console.log(graphicsDesigner); 
//This will return an empty array because it has searched through and found no match.


//let us play further
//let us search for elders using a condition

const elders = people.filter(function(person){
    return person.age >= 50
})
console.log(elders);
//This returns values from the array that has age over 50.




/*NEW TOPIC - FIND */
