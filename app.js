var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"); 
app.get("/", function(req, res){
    res.render("greengear.ejs");
});
app.get("/about", function(req, res){
    res.render("about.ejs");
});
app.get("/contact", function(req, res){
    res.render("contact.ejs");
});
app.get("/login", function(req, res){
    res.render("login.ejs");
});
app.get("/sign", function(req, res){
    res.render("sign.ejs");
});
app.get("/logout", function(req, res){
    res.render("logout.ejs");
});
app.get("/welcome", function(req, res){
    res.render("welcome.ejs");
});
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});