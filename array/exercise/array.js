console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

var numArr = [1.7,  9,  45 ];
var strArr = ["Str", "alex","moh"];
var animalArr = ['the', 'fox', 'over', "lazy", 'dog'];
console.log(numArr, strArr, animalArr);
document.write(numArr, "<br/>", strArr, "<br/>", animalArr, "<br/>");
// console.log(strArr);
// console.log(animalArr);

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf("Banana"));
document.write(numArr, "<br/>", strArr, "<br/>", animalArr, "<br/>");

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

var foodArr = ["Maqloba", "Burger", "Pasta", "BBQ", "Paella"];
var sportArr = ["Horse Riding", "Swimming", "Tennis"];
var movieArr = ["Inception", "The Departed", "Interstaller", "The Blind Side"];
console.log(foodArr, sportArr, movieArr);
document.write(foodArr, "<br/>", sportArr, "<br/>", movieArr, "<br/>");

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr)
{
	return arr[0];
}
console.log(firstOfArray([1,4,5]));
document.write(firstOfArray(["t","u","g","x"]), "<br/>");

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arr)
{
	return arr[arr.length-1];
}
console.log(lastOfArray([1,4,5]));
document.write(lastOfArray(["t","u","g","x"]), "<br/>");

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var arr = [0,5,7,9];
arr.shift();
arr.pop();
for (i in arr)
{
	arr[i]++;
}
arr.unshift(1,3,4);
arr.push(9,10);
console.log(arr);
document.write(arr, "<br/>");


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var arr2 = [5,9,-7,3.5];
console.log(arr2);
console.log(arr2.push(10));    //returns the first element in the array ... 5
console.log(arr2.pop());	   //returns the popped element from the array ... 10
console.log(arr2.unshift(10)); //returns the first element in the old array ... 5
console.log(arr2.shift());	   //returns the shifted element from the array ... 10

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(arr)
{
	if(arr.length%2==1)
	{
		return arr[Math.floor(arr.length/2)];
	}
	return arr.slice(arr.length/2-1, arr.length/2+1);
}
console.log(middleOfArray([1,4,5]));
document.write(middleOfArray(["t","u","g","x"]), "<br/>");
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ['cat', 'ele', 'bird'];
console.log(animals);
document.write(animals, "<br/>")
animals = ['zebra', 'elephant'];
var nums = [1,2,3,8,9];
console.log(nums);
document.write(nums, "<br/>")
nums = [5,-22,3.5,44,98,44];
console.log(animals);
console.log(nums);
document.write(animals, "<br/>")
document.write(nums, "<br/>")

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(arr, index)
{
	return arr[index];
}
var nums= [1,2,3,8,9]
console.log(indexOfArray(nums, 3));
console.log(indexOfArray(nums, 1));
console.log(indexOfArray(nums, 4));
document.write(indexOfArray(nums, 3), "<br/>")
document.write(indexOfArray(nums, 1), "<br/>")
document.write(indexOfArray(nums, 4), "<br/>")

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(arr)
{
	arr.pop();
	return arr;
}
var nums= [1,2,3,8,9];
console.log(arrayExceptLast(nums));
document.write(arrayExceptLast(nums), "<br/>")

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

function addToEnd(arr, value)
{
	arr[arr.length-1] = value;
	return arr;
}
var nums= [1,2,3,8,9];
console.log(addToEnd(nums, 55));
document.write(addToEnd(nums, 55), "<br/>")

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all element in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var nums= [1,2,3,8,9];
function sumArray(arr, forOrWhile)
{
	var result = 0;
	var count = 0;
	if (forOrWhile === "for")
	{
		for (i in arr)
		{
			result += arr[i];
		}
	return result;
	}

	while (count < arr.length)
	{
		result += arr[count];
		count++;
	}
	return result;
}
console.log(sumArray(nums, "for"));
document.write(sumArray(nums, "while"), "<br/>")

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArray(arr, forOrWhile)
{
	var result = 0;
	var count = 0;
	var min = arr[0];
	if (forOrWhile === "for")
	{
		for (i in arr)
		{
			if (arr[i] <= min)
			{
				min = arr[i];
			}
		}
	return min;
	}
	
	while (count < arr.length)
	{
		if (arr[count] <= min)
			{
				min = arr[count];
			}
		count++;
	}
	return min;
}
console.log(minInArray(nums, "for"));
document.write(minInArray(nums, "while"), "<br/>")

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: removeFromArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(arr, element, forOrWhile)
{
	var count = 0;
	if (forOrWhile === "for")
	{
		for (i=0; i<arr.length;i++)
		{
			if (arr[i] === element)
			{
				arr.splice(i, 1);
				i-=1;
			}
		}
	return arr;
	}
	
	while (count < arr.length)
	{
		if (arr[count] === element)
			{
				arr.splice(count, 1);
				count-=1;
			}
		count++;
	}
	return arr;
}
var nums= [1,2,3,8,9];
console.log(removeFromArray(nums, 8, "for"));
document.write(removeFromArray(nums, 8, "while"), "<br/>")

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function oddArray(arr, forOrWhile)
{
	var count = 0;
	if (forOrWhile === "for")
	{
		for (i = 0; i<arr.length; i++)
		{
			if (arr[i]%2 == 0)
			{
				arr.splice(i, 1);
				i-=1;
			}
		}
	return arr;
	}
	
	while (count < arr.length)
	{
		if (arr[count]%2 == 0)
			{
				arr.splice(count, 1);
				count-=1;
			}
		count++;
	}
	return arr;
}
var nums= [1,2,3,8,9];
console.log(oddArray(nums, "for"));
document.write(oddArray(nums, "while"), "<br/>")

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function averageArray(arr, forOrWhile)
{
	var count = 0;
	var sum = 0;
	var average;
	if (forOrWhile === "for")
	{
		for (i in arr)
		{
			sum += arr[i];
		}
		average = sum/arr.length;
	return average;
	}
	
	while (count < arr.length)
	{
		sum += arr[count];
		count++;
	}
	average = sum/arr.length;
	return average;
}
var nums= [1,2,3,8,9]
var nums2= [1,2,3,8,9,77];
console.log(averageArray(nums, "for"));
document.write(averageArray(nums2, "while"), "<br/>")

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr, forOrWhile)
{
	var count = 0;
	var min = arr[0];
	if (forOrWhile === "for")
	{
		for (i in arr)
		{
			if (arr[i].length < min.length)
			{
				min = arr[i];
			}
		}
	return min;
	}
	
	while (count < arr.length)
	{
		if (arr[count].length < min.length)
			{
				min = arr[count];
			}
		count++;
	}
	return min;
}
var strings = ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(shorterInArray(strings, "for"));
document.write(shorterInArray(strings, "while"), "<br/>")

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function repeatChar(str, character, forOrWhile)
{
	var count = 0;
	var times = 0;
	if (forOrWhile === "for")
	{
		for (i in str)
		{
			if (str[i] === character)
			{
				times++;
			}
		}
	return times;
	}
	
	while (count < str.length)
	{
		if (str[count].length === character)
			{
				times++;
			}
		count++;
	}
	return times;
}
var string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string,"a", "for"));
document.write(repeatChar(string,"z", "while"), "<br/>");

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(arr, forOrWhile)
{
	var count = 0;
	var result = [];
	if (forOrWhile === "for")
	{
		for (i in arr)
		{
			if (i%2 == 0)
			{
				if(arr[i].length%2 == 1)
				{
					result.push(arr[i]);
				}
			}
		}
	return result;
	}
	
	while (count < arr.length)
	{
		if (count%2 == 0)
			{
				if(arr[count].length%2 == 1)
				{
					result.push(arr[count]);
				}
			}
		count++;
	}
	return result;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(evenIndexOddLength(strings, "for"));
document.write(evenIndexOddLength(strings, "while"), "<br/>");

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(arr, forOrWhile)
{
	var count = 0;
	if (forOrWhile === "for")
	{
		for (i in arr)
		{
			arr[i]**= i;
		}
	return arr;
	}
	
	while (count < arr.length)
	{
		arr[count]**= count;
		count++;
	}
	return arr;
}
var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums, "for"));
var nums= [44, 5, 4, 3, 2, 10];
document.write(powerElementIndex(nums, "while"), "<br/>");

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(arr, forOrWhile)
{
	var count = 0;
	var result = [];
	if (forOrWhile === "for")
	{
		for (i in arr)
		{
			if (i%2 == 0)
			{
				if(arr[i]%2 == 0)
				{
					result.push(arr[i]);
				}
			}
		}
	return result;
	}
	
	while (count < arr.length)
	{
		if (count%2 == 0)
			{
				if(arr[count]%2 == 0)
				{
					result.push(arr[count]);
				}
			}
		count++;
	}
	return result;
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log(evenNumberEvenIndex(nums, "for"));
document.write(evenNumberEvenIndex(nums, "while"), "<br/>");