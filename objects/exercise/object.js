console.log('Here is : ', 'Object')
/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 }
  
];

var myPerson = {
  name: {
    first: "Ahmad",
    last: "Al-Ghzawi",
  },
  age: 25,
  dob: "15/ 02/ 1994",
  favFood: {
    firstPlace: "Burger",
    secondPlace: "Maqloba",
    thirdPlace: "Paella",
  },
  favMovies: {
    firstPlace: "Inception",
    secondPlace: "Interstaller",
    thirdPlace: "Shutter Island",
    fourthPlace: "The Departed",
    fifthPlace: "The Adjustment Buerue",
  }
}
console.log(myPerson.name.last);
console.log(myPerson.age);
console.log(myPerson.dob);
console.log(myPerson.favFood.firstPlace);
console.log(myPerson.favMovies.thirdPlace);
document.write(myPerson.name.last, "<br/>", myPerson.age, "<br/>", myPerson.dob, "<br/>", myPerson.favFood.firstPlace, "<br/>", myPerson.favMovies.thirdPlace, "<br/>");
/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(obj){
  var names = [];
  for (i in obj){
    names[i] = obj[i].name.first;
  }
  return names;
}
console.log(firstName(persons));
document.write(firstName(persons), "<br/>");


/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/

function averageAge(obj){
  var ages = 0;
  for (i in obj){
    ages += obj[i].age;
  }
  return ages/obj.length;
}
console.log(averageAge(persons));
document.write(averageAge(persons), "<br/>");

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function olderPerson(obj){
  var fullName ;
  var older = obj[0].age;
  for (i in obj){
    if(obj[i].age > older){
      older = obj[i].age;
      fullName = obj[i].name.first+" "+obj[i].name.last;
    }
  }
  return fullName;
}
console.log(olderPerson(persons));
document.write(olderPerson(persons), "<br/>");

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(obj){
  var longest = obj[0].name.first+" "+obj[0].name.last;
  for (i in obj){
    if((obj[i].name.first+" "+obj[i].name.last).length > longest.length){
      longest = obj[i].name.first+" "+obj[i].name.last;
    }
  }
  return longest;
}
console.log(longestName(persons));
document.write(longestName(persons), "<br/>");

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(obj){
  var longest = obj[0].name.first+" "+obj[0].name.last;
  for (i in obj){
    if((obj[i].name.first+" "+obj[i].name.last).length > longest.length){
      longest = obj[i].name.first+" "+obj[i].name.last;
    }
  }
  return longest;
}
console.log(longestName(persons));
document.write(longestName(persons), "<br/>");

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(str){
//   str = str.toLowerCase();
//   var words = str.split(' '); //' ' to split into words. '' to split into characters
//   var repeats = {};
  
//   for(i in words){
//     repeats[words[i]]= 0;
//   }

//   for(key in repeats){
//     for(i in words){
//       if(words[i] == key){
//         repeats[key]+=1;
//       }
//     }
//   }


  str = str.toLowerCase();
  var words = str.split(' '); //' ' to split into words. '' to split into characters
  var repeats = {};
  
  for(i in words){
    if(repeats[words[i]]){
      repeats[words[i]]+=1;
    }
    else{
      repeats[words[i]]=1;
    }
  }
  

  // words = words.sort();
  // var count = 1;
  // var word = words[0];
  // for(var i = 1; i<words.length; i++){
  //   if(words[i]!==word){
  //     repeats[word]=count;
  //     count = 1;
  //     word = words[i];
  //   }
  //   else{
  //     count++;
  //   }
  // }
  // word = words[words.length-1]
  // repeats[word] = count;

  // for(i=1; i<words.length; i++){
  //   if(words[i-1]==words[i]){
  //     count++;
  //   }
  //   else{
  //     repeats[words[i-1]] = count;
  //     count = 1;
  //   }
  // }
  // repeats[words[words.length-1]] = count;
  return repeats;
}
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));



/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar(str){
  str = str.toLowerCase();
  var characters = str.split(''); //' ' to split into words. '' to split into characters
  var repeats = {}
  for(i in characters){
    repeats[characters[i]]= 0;
  }

  for(key in repeats){
    for(i in characters){
      if(characters[i] == key){
        repeats[key]+=1;
      }
    }
  }
  return repeats;
}
console.log(repeatChar("mamababatetacedo"));

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject(obj, arr){
  var newObj = {};
  for(i in arr){
    for(key in obj){
      if(arr[i] == key){
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}
console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object
Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/

function objectToArray(obj){
  var arr = [];
  for(key in obj){
    arr.push(key, obj[key]);
  }
  return arr;
}
console.log(objectToArray({firstName:"Moh",age:24}));

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object
Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/

function arrayToObject(arr){
  var obj = {};
  for(i=0; i < arr.length; i++){
    obj[arr[i]] = arr[++i];
  }
  return obj;
}
console.log(arrayToObject(["firstName","Moh","age",24]));

/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable
Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/

function onlyNumber(obj){
  var newObj = {};
  for(key in obj){
    if(typeof(obj[key])== "number"){
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]}));2

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable
Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/

function onlyString(obj){
  var newObj = {};
  for(key in obj){
    if(typeof(obj[key])== "string"){
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]}));

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable
Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/

function onlyArray(obj){
  var newObj = {};
  for(key in obj){
    if(typeof(obj[key])== "object"){
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']
*/

function keysArray(obj){
  arr = [];
  for(key in obj){
    arr.push(key);
  }
  return arr;
}
console.log(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]
*/

function valuesArray(obj){
  arr = [];
  for(key in obj){
    arr.push(obj[key]);
  }
  return arr;
}
console.log(valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/

var obj = {
  a: 1,
  b: 3,
  c: 4,
}

delete obj.b;
obj.a = 4;
obj.c = 66;

console.log(obj);

/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object
Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/

function objectLength(obj){
  var sum = 0;
  for(key in obj){
    sum +=1;
  }
  return sum;
}
console.log(objectLength({a:1,b:2,c:3,d:4}));

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even
Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/

function evenValue(obj){
  newObj={};
  for(key in obj){
    if(obj[key]%2==0){
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(evenValue({a:1,b:2,c:3,d:4, e:5, f:6, g:8, h:10}));

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key
Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/

function longestKey(obj){
  var keys = Object.keys(obj);
  var longest = keys[0].length;
  var result = keys[0];
  for(i in keys){
    if(keys[i].length > longest){
      result = keys[i];
    }
  }
  return obj[result];
}
console.log(longestKey({car:1, school:2, monster:3, alexMercer:4}));