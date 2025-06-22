require("./xyz.js");
var { x, calculateSum } = require("./calculate/sum.js");
var { result } = require("./calculate/multiplication.js");
//var x = require("./sum.js");
//var calculateSum = require("./sum.js");

var a = "Node JS Tutorial";
calculateSum(1, 2);
let multiplicationResult = result(2, 3);
console.log("Multiplication Result:", multiplicationResult);

console.log(a);
console.log(x);
console.log(xx);
