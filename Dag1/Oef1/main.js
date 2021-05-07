function log(first, second, operator, result) {
    logging.push(first.toString() + operator + second.toString() + "=" + result.toString());
}

function throwIsNotIn(low, high, input) {
    // if (input > high || input < low)
    //     throw "Getal moet groter als -100 en kleiner als 100 zijn!";
}

function sum(first, second) {
    var result  = first + second;
    throwIsNotIn(-100, 100, result);
    log(first, second, "+", result);
    console.log(result);
}

function sumWithoutArgs() {
    sum(arguments[0], arguments[1]);
}

function substract(first, second) {
    var result  = first - second;
    throwIsNotIn(-100, 100, result);
    log(first, second, "-", result);
    console.log(result);
}

function divide(first, second) {
    var result  = first / second;
    throwIsNotIn(-100, 100, result);
    log(first, second, "/", result);
    console.log(result);
}

function multiply(first, second) {
    var result  = first * second;
    throwIsNotIn(-100, 100, result);
    log(first, second, "*", result);
    console.log(result);
}

function isDivisibleBy(first, second) {
    var result = (first % second) === 0;
    log(first, second, "%", result);
    console.log(result);
}

function showLogging() {
    console.group("Logging");

    for (const log of logging) {
        console.log(log);
    }
    
    console.groupEnd();
}

var logging = [];
sum(7, 4);
substract(1, -5);
substract(-5, 1);
divide(10, 5);
multiply(2, 8);
sum(77, 44);
isDivisibleBy(6, 3);
isDivisibleBy(6, 4);
sumWithoutArgs(4, 7);
showLogging();
