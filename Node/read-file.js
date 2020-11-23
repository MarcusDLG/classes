const fs = require("fs");
// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//this will print out as a JSON object but will not return until the two Synchronous functions below are complete. See next note
fs.readFile("data.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log(JSON.parse(data));
});

//13-17 will execute simultaneously with 7-10, but due to the Sync on 13-17
//it will actually queue 7-10 and will not let 7-10 finish its return until 13-17 are complete.
let data = fs.readFileSync("data.json", "utf8");
let dataArr = JSON.parse(data);
dataArr.map((value, index) => {
  console.log(`${value.name} is ${value.age} years old`);
});

//same as 13-17, but utilizing the index to number the people.
let dataData = fs.readFileSync("data.json", "utf8");
let dataDataArr = JSON.parse(dataData);
dataDataArr.map((value, index) => {
  console.log(`${index + 1}. ${value.name} is ${value.age} years old`);
});
