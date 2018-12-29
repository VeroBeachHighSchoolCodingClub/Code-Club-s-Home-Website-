require('./config/config.js');
require('dotenv').config();

const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const Controller      = require('./controllers/controller.js');
const hbs             = require('hbs');
const fs              = require('fs');
const _               = require('lodash');

var {mongoose} = require('./db/mongodb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('if_eq', function(a, b, opts) {
  if (a == b) {
      return opts.fn(this);
  } else {
      return opts.inverse(this);
  }
});

const port = process.env.PORT;

app.use(express.static('./public'));

Controller(app);

app.listen(port, () => {
  console.log(`Starting on port ${port}`);
});
