const fs = require("fs");
const https = require("https");

console.log(" This is async.js");
const x = 33;
const y = 11;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("response successfully received : ", res);
});

setTimeout(() => {
  console.log("Set Timeout is executed after 5 seconds");
}, 5000);

fs.readFileSync("file.txt", "utf8"); // This will block the event loop

fs.readFile("file.txt", "utf8", (err, data) => {
  setTimeout(() => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      console.log("File content:", data);
    }
  }, 5000);
});

console.log("Sum is ", x + y);
