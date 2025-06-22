
//Primitives in JavaScript
// Primitives are basic data types that are immutable and not objects.
let x = 5;//number
let y = "Hello"; //string
let z = true; //boolean
let w = undefined; //undefined
let v = null; //null
let s = Symbol("symbol"); //symbol
let b = BigInt(12345678901234567890); //BigInt
console.log("Primitive Data Types:");
console.log("Number:", x);
console.log("String:", y);
console.log("Boolean:", z);
console.log("Undefined:", w);
console.log("Null:", v);
console.log("Symbol:", s);
console.log("BigInt:", b);

//Non-primitive data types
// Non-primitive data types are objects that can hold collections of values and more complex entities.
let obj = { name: "John", age: 30 }; //object
let arr = [1, 2, 3, 4, 5]; //array
let func = function() { return "I am a function"; }; //function
let date = new Date(); //date
let regex = /abc/; //regular expression
console.log("\nNon-Primitive Data Types:");
console.log("Object:", obj);
console.log("Array:", arr);
console.log("Function:", func());
console.log("Date:", date);
console.log("Regular Expression:", regex);