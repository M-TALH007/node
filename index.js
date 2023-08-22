const express = require("express");
const path = require("path");
const ejsLayout = require("express-ejs-layouts");
const middleware = require("./middleware");
const route = express.Router();
const app = express();
const port = 4000;

route.use(middleware);

const publicPath = path.join(__dirname, "public");
// app.set('views', path.join(__dirname, 'views'));

app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "layouts/layout.ejs");

app.use(ejsLayout);

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/home", (req, res) => {
  res.render("index");
});

// app.get("/index2",(req,res)=>{
//     res.sendFile(`${publicPath}\index2.html`)
// })

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/user", (req, res) => {
  const user = {
    name: "Muhammad Talha",
    email: "abc@gmail.com",
    city: "Lahore",
    skills: ["javaScript", "node js", "C++", "python"],
  };

  res.render("profile", { user });
});

route.get("/authenticate", (req, res) => {
  res.render("index");
});

app.use("/", route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
