/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
function higher(firstInteger, secondInteger)
{
	var result = [];
	if(firstInteger >= secondInteger)
	{
		result = [firstInteger, secondInteger];
	}
	else
	{
		result = [secondInteger, firstInteger];
	}
	return result;
}
var num1 = 50;
var num2 = 70;
var bigger = higher(num1, num2);
console.log("the bigger number is " + bigger[0]);

 /******* End Your Code ********* */


/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
function multiSign(sign1, sign2, sign3)
{
	var result = [];
	if(sign1 < 0)
	{
		result[0]="first number is negative";
	}
	else if (sign1 > 0) 
	{
		result[0] = "first number is positive";
	}
	else
	{
		result[0] = "first number is zero";
	}

	if(sign2 < 0)
	{
		result[1] = " second number is negative";
	}
	else if (sign2 > 0) 
	{
		result[1] = " second number is positive";
	}
	else
	{
		result[1] = " second number is zero";
	}

	if(sign3 < 0)
	{
		result[2] = " third number is negative";
	}
	else if (sign3 > 0) 
	{
		result[2] = " third number is positive";
	}
	else
	{
		result[2] = " third number is zero";
	}
	return result;
}

var num1 = 1;
var num2 = -1;
var num3 = -50;
var toShow = multiSign(num1, num2, num3);
console.log(toShow);
alert(toShow);
 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

function sortNumbers(num1, num2, num3)
{
	var firstBigger = higher(num1, num2);
	var secondBigger = higher(firstBigger[0], num3);
	var thirdBigger = higher(firstBigger[1], secondBigger[1]);
	var sorted = [secondBigger[0], thirdBigger[0], thirdBigger[1]];
	return sorted;
}
var num1 = 1;
var num2 = 2;
var num3 = 3;
var resToShow = sortNumbers(num1, num2, num3);
console.log(resToShow);
alert(resToShow);

 /******* End Your Code ********* */



/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
function highest(num1, num2, num3, num4, num5)
{
	var biggest = higher(num1, num2)[0];
		biggest = higher(biggest, num3)[0];
		biggest = higher(biggest, num4)[0];
 		biggest = higher(biggest, num5)[0];
 	return biggest;
}
var num1 = -96;
var num2 = 555;
var num3 = -55;
var num4 = 78;
var num5 = 5;
var resToShow = highest(num1, num2, num3, num4, num5);
console.log(resToShow);
alert(resToShow);


 /******* End Your Code ********* */

 /* 5.Fix the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/


var x = 5;
var y = 8;
if(x >= y)
{
	console.log("Hello World");
}
else
{
	alert("Goodbye");
}




 /******* End Your Code ********* */


/*write the if statement to display "Hello World" if x is greater than y.*/
/******* Start Your Code *********/
var x = 5;
var y = 8;
if(x >= y)
{
	console.log("Hello World");
}


 /******* End Your Code ********* */

