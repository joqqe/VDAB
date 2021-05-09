function Vehicle(power) {
    this.power = power;
}
Vehicle.prototype.start = function() {
    return this.power + " doet vroem vroem...";
}

function Car(power, make, model, year) {
    Vehicle.call(this, power);
    
    var fuel = "?";

    this.make = make;
    this.model = model;
    this.year = year;
    
    this.getFullName = function() {
        fuel = "petrol";
        return this.model + " " + this.power + " " + fuel;
    };
}
Car.prototype = Object.create(Vehicle.prototype);
Object.defineProperty(Car.prototype, 'constructor', {
    value: Car,
    enumerable: false,
    writable: true });

var audiA1 = new Car("100pk", "Audi", "A1", 2021);
console.log(audiA1.start()); // "100pk doet vroem vroem..."
console.log(audiA1.getFullName()); // "A1 100pk petrol"

console.log("Car: ", audiA1 instanceof Car); // Car: true
console.log("Vehicle: ", audiA1 instanceof Vehicle); // Vehicle: true

console.log(audiA1.constructor.name); // Car
