const app = require("express")();
const consign = require("consign");
const db = require("./config/db");
const mongoose = require("mongoose");
require("./config/mongodb");
app.db = db;
app.mongoose = mongoose;
consign()
  .include("src/config/passport.js")
  .then("src/config/middlewares.js")
  .then("src/repository")
  .then("src/services")
  .then("src/controllers")
  .then("src/config/routes.js")
  .into(app);

app.listen(3000, () => console.log("Backend executando..."));
