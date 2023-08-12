require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => {
    const msg = "Error connecting to Mongoose";
    console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m");
  });
