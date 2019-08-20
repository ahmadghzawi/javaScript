//Excersice 1:Write a function that when given an array sums only the odd values and returns 
//that sum. Assume the array is an array of integers.*/

const summation = (numArr) => {
  let result = 0;
  for (let element of numArr) {
    if (element % 2 == 1) {
      result += element;  
    }
  }
  return result;
}
let integers = [1, 2, 3, 4, 5];
console.log(summation(integers));
console.log(summation([1,5,6]));

//Excersice 2: Write a JavaScript program to reverse the order of the characters in the string.

const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString("ahmad omar"))

/*Excersice 3: Use `const` so `x` can't change
 * 
 * Consider renaming to const convention
 * 
var x = 1; 

if( true ) {
  var x = 2; // should raise a TypeError
}

console.log(x); // 1*/

const x = 1; 
if( true ) {
  const x = 2;
}
console.log(x); 

/* Excersice 4:  Use an ES6 Class to construct a Person instance.
 
function Person(firstname, lastname) {
  this.fname = firstname;
  this.lname = lastname;
}

var john = new Person('John', 'Doe');
var jack = new Person('Jack', 'Doe');

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(john.fname); // John*/

class Person {
  constructor (firstName, lastName) {
    this.fname = firstName;
    this.lname = lastName;
  }
}
let john = new Person('John', 'Doe');
let jack = new Person('Jack', 'Doe');
console.log(john);
console.log(john.fname);
console.log(jack);

/* Excersice 4: Turn `exampleFunction` into a one line "arrow function".

var exampleFunction = function() { 
  console.log('🙌');
}

exampleFunction();*/

const exampleFunction = ()=> console.log('🙌');
exampleFunction();

/*
 * Exercise 5:Make a function that takes array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/

const doubleNumbers = (numArr) => numArr.map(element => element*2);
console.log(doubleNumbers([2, 5, 100]));

/*
 * Exercise 6: Make a function that takes capitalize each of an array of names 
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/

const capitalizeNames = (namesArr) => namesArr.map(name => {
  name = name.toLowerCase();
  name = name.replace(name[0], name[0].toUpperCase())
  return name;
});

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

/*Exercise 7: Write a function called onlyEvenValues which accepts an array and returns a new array 
//with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/

const onlyEvenValues = (numArr) => numArr.filter(element => element % 2 == 0); 

console.log(onlyEvenValues([5,1,2,3,10]));
console.log(onlyEvenValues([1,2,3]));

/*Exercise 8: Write a JavaScript function to find the first not repeated character. Go to the editor
Sample arguments : 'abacddbec' 
Expected output : 'e' 
*/

const unrepeatedCharacter = (str) => {
  str = str.toLowerCase();
  let char = "";
  for (let i = 0; i < str.length; i++ ) {
    char = str[i];
    str = str.replace(str[i], "");
    i--;
    if (str.indexOf(char) == -1) {
      break;
    }
    str += char;
  }
  return char;
}

console.log(unrepeatedCharacter("abacddbec"));
console.log(unrepeatedCharacter("ahmad omar mohammad al-ghzawi"));
/*Exercise 9:Use destructuring to initialize the variables `one`, `two`, and `three` with the 
//colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];
const [one, two, three] = [things[0], things[3], things[7]];
const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

/*Exercise 10:Replace the variable declarations using let or const. */
const CHARACTER_LIMIT = 255;
let posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (var i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();

console.log("");
console.log("");