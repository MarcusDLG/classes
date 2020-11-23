const http = require("http");
const port = 3000; //any port number

const htmlContent = `
<!DOCTYPE html>
<html>
    <head>
        <title>My favorite foods!</title>
    </head>
    <body>
        <h1>I'm hungry just thinking about the following:</h1>
        <ul>
            <li>Ramen</li>
            <li>Enchiladas</li>
            <li>Sushi</li>
        </ul>
        <script>
            console.log("Seriously, send me ramen")
        </script>
    </body>
</html>
`;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(htmlContent);
});
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
