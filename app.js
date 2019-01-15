require('./config/config.js');
require('dotenv').config();

const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const Controller      = require('./controllers/controller.js');
const fs              = require('fs');
const _               = require('lodash');
const jwt             = require('jsonwebtoken');
const bcrypt          = require('bcryptjs');
const cookieParser    = require('cookie-parser');
const multer          = require('multer');
const path            = require('path');
const port            = process.env.PORT;

var {mongoose} = require('./db/mongodb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.static('./uploads'));

var hbs = require('express-handlebars').create({
  extname: 'hbs',
  partialsDir : [__dirname + '/views/partials',],
  helpers: {
    getCurrentYear: function() {
      return new Date().getFullYear();
    },
    if_eq: function(a, b, opts) {
      if (a == b) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    }
  }
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));

Controller(app);

module.exports = {app};

app.listen(port, () => {
  console.log(`Starting on port ${port}`);
});
