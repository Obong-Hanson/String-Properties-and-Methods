
//Array Properties and methods
//This is used for manipulating arrays. just like we had in string properties and methods


let names = [ "john", "andrew", "Peter", "human" ]

//check for length
console.log(names.length); 

//Check for the last value in an array
console.log(names[names.length-1]);

//concat ------Adding new array to an existing array-------
const lastNames = ["Emeka", "John", "Chibuzor", "Akpan"]
const allNames = names.concat(lastNames)
console.log(allNames);

//To reverse the order of appearance, use "reverse"
//Note, you have to invoke it by using parenthesis ();
 console.log(allNames.reverse());

 //Tointroduce(add) new values to the array, we use unshift
 allNames.unshift("hanson")
 console.log(allNames);
 //This brings Hanson to the beginning of the array even when he was not there at first

 //On the other hand, the shift item actually removes a value from the array
 allNames.shift()
 console.log(allNames);
 //This takes out "hanson from the array"

 