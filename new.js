
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



 //Ther is a difference between Null and undefined.
 //Where Null is controlled or set by a developer, undefined means "Javascript cannot find a value"


 //Ternary operator: this is used for writing shorter codes where there is a conditional statement. 
 
 //for example
 const value = 1 > 5
if (value) {
    console.log(`Yes that is correct`);
}
else {
    console.log(`that is a big lie`);
}

//The result of this code block will be the else statement. But, if we want to rewrite the whole of the code block above using a ternary operator "?" it will look like this

value ? console.log(`that is correct`) : console.log(`hahahaha na wa for you o`);