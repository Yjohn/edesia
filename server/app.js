const SERVER_PORT = process.env.PORT || 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const exphbs = require("express-handlebars");
const api = require("./api");
const admin = require("./admin");

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);

app.set("view engine", "hbs");

app.use(cors());

app.use("/api", api);
app.use("/admin", admin);

app.get("/", (req, res) => res.render("home"));

app.listen(SERVER_PORT, () =>
  console.log(`edesia server running on ${SERVER_PORT}`)
);
