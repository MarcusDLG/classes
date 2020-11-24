const people = [
  {
    first: "Marcus",
    last: "DLG",
    email: "facebook.com",
  },
  {
    first: "Jamie",
    last: "DLG",
    email: "facebook.com",
  },
  {
    first: "Carla",
    last: "DLG",
    email: "facebook.com",
  },
];

const http = require("http");
const port = 5566;
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.write(JSON.stringify(people));
  res.end();
});
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
