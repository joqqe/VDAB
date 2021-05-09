function Vehicle(power) {
    return {
        power: power,
        start: function() {
            return this.power + " doet vroem vroem...";
        }
    };
}

function Car(power, make, model, year) {
    return {
        ...Vehicle.call(this, power),
        make: make,
        model: model,
        year: year,
        getFullName: function() {
            return this.model + " " + this.power;
        }
    };
}

var audiA1 = Car('100pk', 'Audi', 'A1', 2021);
console.log(audiA1.start()); // "100pk doet vroem vroem..."