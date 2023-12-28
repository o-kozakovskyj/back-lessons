const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home page");
  }
  if (req.url === "/about") {
    res.end("about us");
  }
  res.end(`<h1>Error 404</h1>
    <a href="/">back home</a>`);
});
server.listen(5000);
