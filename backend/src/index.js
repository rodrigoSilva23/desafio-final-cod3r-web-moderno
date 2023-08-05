const app = require("express")();
const consign = require("consign");
const db = require("./config/db");
app.db = db;
consign()
  .then("src/config/middlewares.js")
  .then("src/repository")
  .then("src/services")
  .then("src/controllers")
  .then("src/config/routes.js")
  .into(app);

app.listen(3000, () => console.log("Backend executando..."));
