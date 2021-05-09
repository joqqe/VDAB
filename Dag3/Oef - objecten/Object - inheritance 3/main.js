class Vehicle {
    constructor(power) {
        this.power = power;
    }
    
    start = function() {
        return this.power + " doet vroem vroem...";
    };
}

class Car extends Vehicle {
    constructor(power, make, model, year) {
        super(power);
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getFullName = function() {
        return this.model + " " + this.power;
    };
}

var audiA1 = new Car('100pk', 'Audi', 'A1', 2021);
console.log(audiA1.start()); // "100pk doet vroem vroem..."

console.log("Car: ", audiA1 instanceof Car); // true
console.log("Vehicle: ", audiA1 instanceof Vehicle); // true
console.log(audiA1.constructor.name); // Car