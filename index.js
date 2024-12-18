// Definisi Library yang digunakan
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const flash = require("req-flash");
const app = express();

// Definisi lokasi file router
const loginRoutes = require("./src/routes/router-login");
const bibitRoutes = require("./src/routes/router-bibit");
const pupuktRoutes = require("./src/routes/router-pupuk");
const homeRoutes = require("./src/routes/router-home");

// Configurasi library session
app.use(
  session({
    secret: 'secret',
    name: "secretname",
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: true,
      maxAge: 60000,
    },
  })
);

// Configurasi dan gunakan library
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());

app.use(function (req, res, next) {
  res.setHeader(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  res.setHeader("Pragma", "no-cache");
  next();
});


// Setting folder views
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Gunakan routes yang telah didefinisikan
app.use("/login", loginRoutes);
app.use("/bibit", bibitRoutes);
app.use("/pupuk", pupuktRoutes);
app.use("/", homeRoutes);

console.log(app._router.stack);

// Gunakan port server
app.listen(3000, () => {
  console.log("Server Berjalan di Port : " + 3000);
});
