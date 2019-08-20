//console.log('Here is : ', 'Reduce & Filter') 

//Using Reduce 1 -5
var persons = [
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 50 },
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Sososss', last: 'Al-Amoraaa' }, age: 55 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/

function avgAge(arr){
	return arr.reduce((acc, cv)=>{return acc+cv.age/arr.length;}, 0);
}
console.log(avgAge(persons));
document.write(avgAge(persons), "<br/>");

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/

function longestName(arr){
	return arr.reduce((acc, cv)=>{
		var cvName = cv.name.first+" "+cv.name.last;
		if(acc.length>cvName.length)
		{
			return acc;
		}
		return cvName;
	}, "");
}
console.log(longestName(persons));
document.write(longestName(persons), "<br/>");

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/

function maxNumber(arr){
	return arr.reduce((acc, cv)=>{
		if(acc>cv){
			return acc;
		}
		return cv;
	});
}
console.log(maxNumber([100,2,4000,900000]));
document.write(maxNumber([1,2,4,9]), "<br/>");

/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/

function repeatChar(str, character){
	character = character.toLowerCase();
	str = str.toLowerCase().split("");
	return str.reduce((acc, cv)=>{
		if(cv === character){
			return ++acc;
		}
		return acc;
	}, 0);
}
console.log(repeatChar("hello world","w"));
document.write(repeatChar("hello world","l"), "<br/>");

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBetweenUs(num1, num2){
	arr = new Array(num2-num1);
	// console.log(arr)
	arr.unshift(num1);
	return arr.reduce((acc, cv, index)=>{
		if(cv<num2){
			cv++;
			arr[index+1]=cv;
			return acc.concat(cv); 
		}
		return acc;
	}, [num1]);
}
console.log(usAndNumberBetweenUs(2,5));
document.write(usAndNumberBetweenUs(1,10), "<br/>");

document.write("<br/>", "<h1>.filter()</h1>");


//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

function evenOnly(arr){
	return arr.filter(element=> element%2==0);
}
console.log(evenOnly([1,8,6,4]));
document.write(evenOnly([1,8,6,4]), "<br/>");

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

function multiFour(arr){
	return arr.filter(element=> element%4==0);
}
console.log(multiFour([1,8,6,4]));
document.write(multiFour([1,8,6,4]), "<br/>");

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

function containChar(strArr, character){

	return strArr.filter(element=>{
		return element.toLowerCase().indexOf(character.toLowerCase())!==-1;
	});
}
console.log(containChar(["hello","world"],"w"));
document.write(containChar(["hello","world"],"l"), "<br/>");

/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index


Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(strArr){
	return strArr.filter((element, index)=>index%2==0 && element.length%2==1);
}
var strings= ["alexx","mercer","madrasa","rashed2","Eemad","hala"];
console.log(evenIndexOddLength(strings));
document.write(evenIndexOddLength(strings), "<br/>");

/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

function olderThan(numArr, age){
	return numArr.filter(element => element.age > age)
}
console.log(olderThan(persons,56));
document.write(olderThan(persons,56), "<br/>")
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

function shorterThan(strArr, num){
	return strArr.filter(element => element.length < num)
}
// variable string is declared above
console.log(shorterThan(strings,5));
document.write(shorterThan(strings,5), "<br/>")
// if you finish the exercises review the material of the week and help your classmate
