function car(make, model){
	this.CarMake = make;
	this.CarModel = model;
	this.isItFuelEfficient = function(){
		if(model>2010){
			return true;
		}
		return false;
	}
	this.inWhichCarAmI = function(){
		return "You are in "+make+". Model "+model;
	}
}

function person(name, age){
	this.Name = name;
	this.Age = age;
}

var ahmad = new person("Ahmad Omar Ghzawi", 25);
var mercedes = new car("Mercedes", 2019);
var toyo = new car("Toyota", 1999);
var audi = new car("Audi", 1980);

console.log(ahmad);
console.log(mercedes);
console.log(toyo);
console.log(audi);
