// var header = document.querySelector("header");
// window.addEventListener("scroll", function () {
//   header.classList.toggle("sticky", window.scrollY > 100);
// });

const http = require("http");
const port = 3000;

const server = http.createServer(function (req, res) {
  res.write("Hello Node");
  res.end();
});
server.listen(port, function (error) {
  if (error) {
    console.log("Somethiing Went Wrong", error);
  } else {
    console.log("Server is Listening On Port" + port);
  }
});

// app.post("/create-contact", function (req, res) {
//   return res.redirect("/practice");
// });
