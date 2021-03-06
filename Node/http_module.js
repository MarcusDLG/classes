const http = require("http");
const port = 4200; //not const port = {3000}

//html being driven to page via server side render.
const htmlContent = `
<!DOCTYPE html>
<html>
    <head>
        <title>My favorite foods!</title>
    </head>
    <body>
        <h1>People and Contact</h1>
        <ul>
            
        </ul>
        <script>
          fetch("http://localhost:5566")
          .then(res=>res.json())
          .then(data => {
            let listEl = document.querySelector("ul")
            data.forEach(person=>{
              let li = document.createElement("li")
              li.innerText = person.first + '  '+ person.last + '   ' + person.email
              listEl.append(li)
            })
          })
          .catch(err=>console.log(err))
        </script>
    </body>
</html>
`;

//each time there is a request made to the server it runs this function.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(htmlContent);
});
//telling the program to listen to ${port} and will continuously run until you close with control+C
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
