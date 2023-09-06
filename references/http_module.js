const http = require("http");

// create server obj
http
  .createServer((req, res) => {
    // write a res
    res.write("Hello world.");
    res.end();
  })
  .listen(8000, () => console.log("server running..."));
