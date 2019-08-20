//ES6
class Car {
	constructor (make, model) {
		this.Make = make;
		this.Model = model;
	}
	isItFuelEfficient () {
		if (this.Model>2010) {
			return true
		}
		return false
	}
	inWhichCarAmI () {
		return `You are in ${this.Make}. Model ${this.Model}`
	}
}

class Dog {
	constructor (name, age, weight) {
		this.Name = name;
		this.Age = age;
		this.Weight = weight;
	}
	bark () {
		return `${this.Name} says woof!`
	}
	barkTwice () {
		return `${this.bark()} woof!`
	}
}

var mercedes = new Car("Mercedes", 2019);
var toyo = new Car("Toyota", 1999);
var audi = new Car("Audi", 1980);
var java = new Dog("Java", 2, 60);
var jodi = new Dog("Jodi", 5, 35);

console.log(Car);

console.log("");

console.log(mercedes);
console.log(toyo);
console.log(audi);
console.log(toyo.isItFuelEfficient());
console.log(mercedes.isItFuelEfficient());
console.log(audi.isItFuelEfficient());
console.log(audi.inWhichCarAmI());
console.log(audi);

console.log("");

console.log(java);
console.log(jodi);
console.log(java.bark());
console.log(jodi.bark());
console.log(jodi.barkTwice());

//ES5
// function Car(make, model){
// 	this.CarMake = make;
// 	this.CarModel = model;
// }

// Car.prototype.isItFuelEfficient = function(){
// 	if(this.CarModel>2010){
// 		return true;
// 	}
// 	return false;
// }
// Car.prototype.inWhichCarAmI = function(){
// 	return "You are in "+this.CarMake+". Model "+this.CarMmodel;
// }

// function Dog(age, weight, name){
// 	this.age = age;
// 	this.weight = weight;
// 	this.name = name;
// }
// Dog.prototype.bark = function(){
// 	return `${this.name} says woof!` //another way to manipulate strings
// }
// Dog.prototype.barkTwice = function(){
// 	return this.bark()+" woof!"; 
// }