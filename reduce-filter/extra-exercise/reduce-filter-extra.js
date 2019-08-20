/*
12
Using Filter
Create a function called longerThan
that accept an array of strings
and return the longer string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: longerThan(strings,4) => ["mercer","madrasa","rashed2"]
*/

function longerThan(strArr, num){
	return strArr.filter(element=> element.length>num)
}
strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(longerThan(strings,4));
document.write(longerThan(strings,3), "<br/>");

/*
13
Using Filter
Create a function called onlyOneWord
that accept an array of strings
and return only those strings with a single word (no spaces)
var strings= [ 'return', 'phrases', 'with one word' ];
Ex: onlyOneWord(strings) => [ 'return', 'phrases' ]
*/

function onlyOneWord(strArr){
	return strArr.filter((element,index)=> {
		element = element.split(" ");
		if(element.length == 1){
			return element;
		}
	});
}
strings = [ 'return', 'phrases', 'with one word' ];
console.log(onlyOneWord(strings));
document.write(onlyOneWord(strings), "<br/>");

/*
14
Using Filter
Create a function called positiveRowsOnly
that accept an array of array of numbers(matrix)
and return only the rows in the matrix that have all positive integers
var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];
Ex: positiveRowsOnly(numbers) => [ 3, 30,  300 ]
*/

function positiveRowsOnly(arr){
	return arr.filter(element=>{
		for(i=0; i<element.length; i++){
			if(element[i]<0){
				return;
			}
			continue;
		};
		return element; 
	});
}
numbers = [[ 1, 10, -100], [ 2, -20, 200],[ 3, 30,  300]];
console.log(positiveRowsOnly(numbers));
document.write(positiveRowsOnly(numbers), "<br/>");

/*
15
Using Filter
Create a function called allSameVowels
that accept an array of strings
return only those words where all the vowels are the same
var strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
Ex: allSameVowels(strings) =>  [ 'amalgam', 'zoom' ]
*/

function allSameVowels(strArr){
	var vowels = ["a", "e", "i", "o", "u"];
	var result = [];
	var length = 0;
	return strArr.filter(element=>{
		for(i=0; i<vowels.length; i++){
			if(element.indexOf(vowels[i])!=-1){
				result.push(vowels[i]);
			}
		};
		length = result.length;
		// console.log(result);
		result = [];
		return length==1;
	});

}
var strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
console.log(allSameVowels(strings));
document.write(allSameVowels(strings), "<br/>");

document.write("<br/>", "<h1>.reduce()</h1>");
//Using Reduce 16 -

/*
16
Using Reduce
Create a function called objectify
that accept an array of pairs array
and turns an array of arrays into an object
var array= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ]]
Ex: objectify(array) =>  { 'Thundercats': '80s', 'The Powerpuff Girls': '90s', 'Sealab 2021': '00s' };
*/

function objectify(objArr){
	var result = {};
	return objArr.reduce((acc,cv)=> {
		result[cv[0]]=cv[1];
		return result
	}, []);
}
var arr= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ], ['coding academy', '2000s']]
console.log(objectify(arr));
document.write(objectify(arr), "<br/>");

/*
17
Using Reduce
Create a function called luckyNumbers
that accept an array of number
and turns an array of arrays into an object
var array= [ 30, 48, 11, 5, 32 ]
Ex: luckyNumbers(array) => 'Your lucky numbers are: 30, 48, 11, 5, and 32';
*/

function luckyNumbers(numArr){
	return "Your lucky numbers are: "+numArr.reduce((acc,cv)=>{
		acc+= ", "+cv;
		return acc;
	});
}

// function luckyNumbers(numArr){
// 	var str = "Your lucky numbers are: "+numArr[0]; 
// 	return numArr.reduce((acc,cv)=>{
// 		str += ", "+cv;
// 		return str;
// 	});
// }

var arr= [ 30, 48, 11, 5, 32 ];
console.log(luckyNumbers(arr));
document.write(luckyNumbers(arr), "<br/>");


// if you finish the exercises review the material of the week and help your classmate