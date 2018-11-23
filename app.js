require('./config/config.js');

const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const Controller      = require('./controllers/controller.js');
const hbs             = require('hbs');
const fs              = require('fs');

var {mongoose} = require('./db/mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

const port = process.env.PORT;

app.use(express.static('./public'));

Controller(app);

app.listen(port, () => {
  console.log(`Starting on port ${port}`);
});
