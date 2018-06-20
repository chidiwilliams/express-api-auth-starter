const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const dotenv = require('dotenv');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');

const app = express();
const router = express.Router();

require('./api/models/db');
require('./api/config/passport');

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(passport.initialize());

router.get('/', (req, res) =>
  res.status(200).json({
    success: true
  })
);

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
