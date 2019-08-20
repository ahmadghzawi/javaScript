var person = {							//Object
	name: "Ahmad", 						//Key and Value
	age: 25,							//Key and Value
	isTall: function (){				//Method
		return true;
	},
	weight: 86,							//Key and Value 
};
console.log(person.name);
console.log(person.age);
console.log(person.weight);
console.log(person.isTall());
console.log("");

var samePerson = {
	name: {								//Object inside of an
		first: "Ahmad",
		middle: "Omar",
		last: "Al-Ghzawi",
	},
	age: 25+ " Years old.",
	isTall: function (){
		return "He is tall.";
	},
	weight: 86+ " Kg.",
};
console.log(samePerson.name.first);
console.log(samePerson.name.last);
console.log(samePerson.age);
console.log(samePerson.weight);
console.log(samePerson.isTall());
console.log("");

var umbrella = {						//To overwrite a value use the following person.name = "something";
	name: "Umbrella",					//To use an object there are two approaches
	color: "Black",						//1- person.name
	weight: 0.5,						//2- person["name"]
	shape: "Round",						//BE AWARE! you can not call the method using the 2nd approach. 
	isOpen: function(){					//It only works with the 1st one.
		return true;
	},
	isClosed: function(){
		return false;
	},
	price: 2,
};
console.log(umbrella.name);
console.log(umbrella.color);
console.log(umbrella.weight);
console.log(umbrella.shape);
console.log(umbrella.isOpen());
console.log(umbrella.isClosed());
console.log("");
console.log(umbrella['coloor']='red');
console.log(umbrella['coloor']);


