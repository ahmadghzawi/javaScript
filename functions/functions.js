/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFurtune(numOfChildren, partnerName, location, job)
{
	return "You will be a "+job+" in "+location+", and married to "+partnerName+" with "+numOfChildren+" kids.";
}
console.log(tellFurtune(5, "Mayyada", "Germany", "Doctor"));
document.write(tellFurtune(5, "Mayyada", "Germany", "Doctor"), "<br/>");

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(puppyAge)
{
	return "Your doggie is "+puppyAge*7+" years old in dog years!";
}
console.log(calculateDogAge(5));
document.write(calculateDogAge(5), "<br/>");

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPerDay)
{
	return "You will need "+amountPerDay*(100-age)*365+" to last you until the ripe old age of 100."
}
console.log(calculateSupply(30, 3));
document.write(calculateSupply(30, 3), "<br/>");

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Jouza")
=> "Hello Jouza"
*/

function greet(name)
{
	return "Hello "+name;
}
console.log(greet("Ahlam"));
document.write(greet("Ahlam"), "<br/>");

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

function double(x)
{
	return	2*x;
}
console.log(double(4));
document.write(double(4), "<br/>");

function double(n)
{
	return 2*n;
}
console.log(double(7));
document.write(double(7), "<br/>");

function double(n)
{
	return 2*n;
}
console.log(double(7));
document.write(double(7), "<br/>");

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x)
{
	return 2*x;
}

function double2(x)
{
	return 2*x;
}

function double3(x)
{
	return 2*x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(num)
{
	return num**3;
}
console.log(cube(2));
document.write(cube(2), "<br/>");

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(x, y)
{
	return x*y;
}
console.log(multiply(4,3));
document.write(multiply(4,3), "<br/>");

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age)
{
	if(age>=20)
	{
		return "Yes you can.";
	}
	return "Please come back after "+ (20-age) +" years to get one.";
}
console.log(canIGetADrivingLicense(18));
document.write(canIGetADrivingLicense(18), "<br/>");


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2)
{
	if(str1.length == str2.length)
	{
		return true;
	}
	return false;
}
console.log(sameLength("ahmad", "nsour"));
document.write(sameLength("ahmad", "nsour"), "<br/>");

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNumber(firstNum, secondNum)
{
	if(secondNum >= firstNum)
	{
		return	secondNum;
	}
	return firstNum;
}
console.log(largerNumber(55, 15));
document.write(largerNumber(55, 15), "<br/>");

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNumber(firstNum, secondNum, thirdNum)
{
	var min = firstNum;
	if(secondNum < min)
	{
		min = secondNum;
	}
	if(thirdNum < min)
	{
		min = thirdNum;
	}
	return min;
}
console.log(smallerNumber(-1, -10, 1));
document.write(smallerNumber(-1, -10, 1), "<br/>");

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(num1,num2,num3,num4,num5)
{
var min =num1.length;
var str=num1;
if(num2.length< min)
{
	min=num2.length;
	str=num2;
}
if(num3.length< min)
{
	min=num3.length;
	str=num3;
}
if(num4.length< min)
{
	min=num4.length;
	str=num4;
}
if(num5.length< min)
{
	min=num5.length;
	str=num5;
}
return str;
}
console.log (shorterString("good","body","every","hi","morning"));
document.write(shorterString("good","morning","every","body","hi"), "<br/>");

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(str1,str2,str3,str4)
{
var max =str1.length;
var str=str1;
if(str2.length> max)
{
	max=str2.length;
	str=str2;
}
if(str3.length> max)
{
	max=str3.length;
	str=str3;
}
if(str4.length> max)
{
	max=str4.length;
	str=str4;
}
return str;
}
console.log(longerString("good","morning","every","body"));
document.write (longerString("good","morning","every","body"), "<br/>");

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(num)
{
	if(num%2==0)
	{
		return true;
	}	
	return false;
}
console.log(isEven(4));
document.write(isEven(4), "<br/>");

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(num)
{
	if(num%2==0)
	{
		return false;
	}
	return true;
}
console.log(isOdd(1));
document.write(isOdd(1), "<br/>", "<br/>");

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(num)
{
	if(num<0)
	{
		return num*-1;
	}
	return num;
}
console.log(positive(-50));
document.write(positive(1), "<br/>");

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(first,last) 
{
	return first+" "+last;
}
console.log(fullName("ahmed","nsour"));
document.write(fullName("ahmed","nsour"), "<br/>");

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(x1,x2,x3,x4,x5){
	return(x1+x2+x3+x4+x5)/5;
}
console.log(average(40,15,15,10,20));
document.write(average(40,15,15,10,20), "<br/>");

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber()
{
	return (Math.random()*10).toFixed(0);
}
//OR
function randomNumber()
{
	return Math.floor(Math.random()*Math.floor(10));
}
console.log(randomNumber());
document.write(randomNumber(), "<br/>");

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumber(min,max)
{
	return Math.floor(Math.random()*(max-min)+min);
}
console.log(randomBetweenNumber(5,10));
document.write(randomBetweenNumber(3,6), "<br/>");

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function sourceInUniversity(grade)
{
if (grade>=95&&grade<=100)
{
	return "A";
}
if (grade>=85&&grade<=94)
{
	return "B";
}
if (grade>=70&&grade<=84)
{
	return "C";
}
if (grade>=50&&grade<=69)
{
	return "D";
}
return "F";
}
console.log(sourceInUniversity(84));
document.write(sourceInUniversity(48), "<br/>");

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

var count = 0;
function counter()
{
    count=count+1;
	return count;
}
console.log(counter());
document.write(counter(), "<br/>");
console.log(counter());
document.write(counter(), "<br/>");
console.log(counter());
document.write(counter(), "<br/>");

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
var count = 0;
function counter()
{
    count=count+1;
	return count;
}

function resetCounter()
{
var msg= count+" and the counter resets now ";
count=0;
return msg;
}
console.log(counter());
document.write(counter(), "<br/>");
console.log(counter());
document.write(counter(), "<br/>");
console.log(counter());
document.write(counter(), "<br/>");
console.log(resetCounter());
document.write(counter(), "<br/>");
console.log(counter());
document.write(counter(), "<br/>");
console.log(counter());
document.write(counter(), "<br/>");