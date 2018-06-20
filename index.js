const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const routes = require('./api/routes/index');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

require('./api/models/db');
require('./api/config/passport');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(passport.initialize());

// [SH] Use the API routes when path starts with /api
app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers
app.use(function(err, req, res, next) {
  if (err.status === 401) {
    res.status(401);
    res.json({ message: err.name + ': ' + err.message });
  } else if (err.status === 404) {
    res.status(404);
    res.json({
      message: err.message,
      error: err,
    });
  } else {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: app.get('env') === 'development' ? {} : err,
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
