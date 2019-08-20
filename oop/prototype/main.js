function Car(make, model){
	this.CarMake = make;
	this.CarModel = model;
}

Car.prototype.isItFuelEfficient = function(){
	if(this.CarModel>2010){
		return true;
	}
	return false;
}
Car.prototype.inWhichCarAmI = function(){
	return "You are in "+this.CarMake+". Model "+this.CarMmodel;
}

var mercedes = new Car("Mercedes", 2019);
var toyo = new Car("Toyota", 1999);
var audi = new Car("Audi", 1980);

console.log(mercedes);
console.log(toyo);
console.log(audi);

console.log(toyo.isItFuelEfficient());
console.log(mercedes.isItFuelEfficient());
console.log(audi.isItFuelEfficient());

console.log(audi.inWhichCarAmI());
console.log(audi);

console.log("");

function Dog(age, weight, name){
	this.age = age;
	this.weight = weight;
	this.name = name;
}
Dog.prototype.bark = function(){
	return `${this.name} says woof!` //another way to manipulate strings
}
Dog.prototype.barkTwice = function(){
	return this.bark()+" woof!"; 
}

dog1 = new Dog(2, 60, "Java");
dog2 = new Dog(2, 60, "Jodi");
dog1.bark();
dog2.bark();

console.log(dog1);
console.log(dog2);

console.log(dog1.bark());
console.log(dog2.bark());

console.log(dog2.barkTwice());
