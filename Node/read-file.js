const fs = require("fs");
// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.readFile("data.json", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(JSON.parse(data));
// });

let data = fs.readFileSync("data.json", "utf8");
let dataArr = JSON.parse(data);
dataArr.map((value, index) =>
  console.log(`${value.name} is ${value.age} years old`)
);
