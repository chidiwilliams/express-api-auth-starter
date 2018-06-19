const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require('passport');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');

const app = express();
const router = express.Router();

mongoose.connect("mongodb://localhost:27017/blog");
require('./api/config/passport');

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(passport.initialize());

router.get("/", (req, res) =>
  res.status(200).json({
    success: true
  })
);

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running");
});
