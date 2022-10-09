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
//still woring with the same data above
//returns single instance - (in this case, object), returns first match (returns undefined if there is no match)
//We use IDs here for unique values  

const People = [
    {name: 'bob', age: 30, position: 'developer', id: 1 },
    {name: 'Hanson', age: 100, position: 'designer', id: 2 },
    {name: 'Ime', age: 90, position: 'CEO', id: 3 },
    {name: 'efe', age: 60, position: `web designer`, id: 4 }, 
];



console.log(People.find(function(person){
    return person.id === 4
})); 
// console.log(People.find(getItem));
//This will return Efe beause that is what satisfies the id value of 3.


//REDUCE
//reduces to a single value - number, array, object
//always set what value you want to return when using this method

const Peoples = [
    {name: 'bob', age: 30, position: 'developer', id: 1, salary: 200 },
    {name: 'Hanson', age: 100, position: 'designer', id: 2, salary: 300 },
    {name: 'Ime', age: 90, position: 'CEO', id: 3, salary: 500 },
    {name: 'efe', age: 60, position: `web designer`, id: 4, salary: 1000 }, 
];

const total = Peoples.reduce(function(acc, curr){
    //acc = accumulator which also means "total"
    //curr = current item
    //always return the accumlator(the f irst parameter)
    console.log(`total ${acc}`);
    console.log(`current money: ${curr.salary}`);
    acc += curr.salary
    return acc;
},0)
console.log(total);
//zero "0" is appearing here because we want to return a number.






//Exercise

//Set up an array carrying 5 students with random names, scores and favourite subjects
const students = [
    {id: 1, name: 'ubong', score: 80, favoriteSubject: 'maths.'},
    {id: 2, name: 'ukpono', score: 50, favoriteSubject: 'Eng.'},
    {id: 3, name: 'ebong', score: 30, favoriteSubject: 'chem.'},
    {id: 4, name: 'uduak', score: 70, favoriteSubject: 'phy.'},
    {id: 5, name: 'sly', score: 100, favoriteSubject: 'geo.'},
]; 
console.log(students);

function shoutName(name){
    console.log(name);
}


//Using MAP function, I assigned the role: student to each of the names in the array
const updatedStudents = students.map(function(student){
    // console.log(student);
    student.role = `student`
    return student;
});


//Using the FILTER method, we picked students with scores equal to or above 80
const highScores = students.filter(function(student){
    //there are two ways to approach this.. either write it like this

    // if(student.score >= 80){
    // return student;
    // }

    //or the short way which is this
    if(student.score >= 80) return student;
})

console.log(highScores);

//Using FIND method, let us find a student by ID property
const newID = students.find(function(student){
    if (student.id === 2)
    return student 
});
console.log(newID);








//MATH OBJECT - NEW TOPIC
//These are standard built in objects in JavaScript

//For rounding number down
const number = 7.25479
const result   = Math.floor(number)
console.log(result); 
//answer is 7


//For rouding numbers up
const num2 = 8.12354
const result2 = Math.ceil(num2) 
console.log(result2);


//For finding SQUARE ROOT
const num3 = 100
const result3 = Math.sqrt(num3)
console.log(result3);

//For PI
const result4 = Math.PI;
console.log(result4);

//Minimum and Maximum
const result5 = Math.min(1,5,88,97,65,4)
console.log(result5);

const result6 = Math.max(1,5,88,97,65,4)
console.log(result6);


//DATE OBJECT
const date = new Date ();
console.log(date); //gives me today's date,time and time zone

const month = date.getMonth();
console.log(month);
//Because Js is zero index based, it starts counting months from zero and refers to january as "0" instead of 1 hene we have 9 (september)

//we can corrct this by giving it a reference
const months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const newMonth = date.getMonth();
console.log(months[month]);
//this returns October as the actual month.



//Reference for day
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//Day
const day = date.getDay();
console.log(days[day]);

console.log(date.getFullYear()); //gives us the year we are in


//Write a full sentence in the consloe using date object
const giveAway = `Give away ends on ${days[day]} ${date.getDate()}, ${months[month]} ${date.getFullYear()}`

console.log(giveAway);