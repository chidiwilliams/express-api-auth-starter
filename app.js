const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

mongoose.connect("mongodb://localhost:27017/blog");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

router.get("/", (req, res) =>
  res.status(200).json({
    success: true
  })
);

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running");
});
