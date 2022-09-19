//Weekly Progress 3
// String Properties and methods

let text = " Obong Hanson";
console.log(text);

//Methods

//To get the length of the string
console.log(text.length);

//To bring out the string in lowercase ("You have to invoke the string by using the ()"")
console.log(text.toLowerCase());

//To uppercase
console.log(text.toUpperCase());

//To find a character at a particular location
console.log(text.charAt(4));

//To trim off white space (To get rid of white spaces)
console.log(text.trim());

//To check what the string starts with
console.log(text.startsWith("Obong"));
//This will return false because, although the string contains "Obong" it does not actually start with "Obong" it actually starts with a white space.

//To check what the string starts with irrespective of the white space, we will combine methods
console.log(text.trim().toLowerCase().startsWith("obong"));
//what I did here is, I first of all trimmed the string to get rid of white space, then, I asked it to print in lowercase and then, I entered the value I was in lowercase.





//USING INTERPOLATION IN JAVASCRIPT "${}"
const firstname = "Hanson";
const surname = "Obong";

let reply = "Hey there" + " I am " + surname + " " + firstname
console.log(reply);

// The result in the console is "Hey there I am Obong Hanson"

// We can get rid of using the whole addition sign for concatenation and this is where Interpolation comes in

// Still using this statement 
// const firstname = "Hanson";
// const surname = "Obong";
// Let us relog the rewrite the reply using ${} this time 

let reply2 = `Hey there, I am ${surname} ${firstname}`
console.log(reply2);
