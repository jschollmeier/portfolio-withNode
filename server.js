var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes")(app);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "public/portfolio.html"));
  });
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "public/contact.html"));
  });
  app.get("/jakob-resume", function(req, res){
    res.sendFile(path.join(__dirname, "public/jakob-resume.pdf"));
  })

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });