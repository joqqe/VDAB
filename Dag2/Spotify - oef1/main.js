var buttonArray1 = document.getElementsByTagName("button");
console.log("buttons: ", buttonArray1.length);

var buttonArray2 = document.querySelectorAll("button");
console.log("buttons: ", buttonArray2.length);


var classArray1 = document.getElementsByClassName("active");
console.log("active classes: ", classArray1.length);

var classArray2 = document.querySelectorAll(".active");
console.log("active classes: ", classArray2.length);


var hasClassArray = document.querySelectorAll("[class]");
console.log("has class attribute:", hasClassArray.length);