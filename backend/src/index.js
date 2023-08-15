const app = require("express")();
const consign = require("consign");
const db = require("./config/db");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');
require("./config/mongodb");

app.db = db;
app.mongoose = mongoose;
const PORT = process.env.PORT || 3000;
consign()
  .include("src/config/passport.js")
  .then("src/config/middlewares.js")
  .then("src/repositories")
  .then("src/services")
  .then("src/controllers")
  .then("src/schedules")
  .then("src/config/routes.js")
  .into(app);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));
app.get("/swagger", (req,res)=>{
  return  res.json(docs)
});
app.get("/docs", (req,res)=>{
  return  res.sendFile(process.cwd() + "/src/views/docs/index.html")
});

async function initialize() {
  app.listen(PORT);
}

initialize().finally(() => console.log(`app started on port:${PORT}`));
