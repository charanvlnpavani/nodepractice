console.log("This file is blocking.js");

const crypto = require("crypto");
// const crypto = require("node:crypto");

const x = 33333333;
const y = 11111111;

//pbkdf2Sync is a synchronous function that blocks the event loop
crypto.pbkdf2Sync("password", "fakjfka", 500000000, 100, "sha512");
console.log("Sync pbkdf2 is executed");

//pbkdf2 is an asynchronous function that does not block the event loop
crypto.pbkdf2(
  "pasdddsword",
  "fakjfkaa",
  5000,
  100,
  "sha512",
  (err, derivedKey) => {
    if (err) {
      console.error("Error occurred:", err);
    }
    console.log("Async pbkdf2 is executed", derivedKey.toString("base64"));
  }
);
console.log("Sum is ", x + y);
console.log("This is the end of blocking.js");
