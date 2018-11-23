const {Member} = require('../db/models/members');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');

module.exports = (app) => {

  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.render('home', {location: 'Home'});
  })

  app.get('/about', (req, res) => {
    res.render('about', {location: 'About'})
  })

  app.get('/projects', (req, res) => {
    res.render('projects', {location: 'Our Projects'})
  })

  app.get('/email', (req, res) => {
    res.render('email', {location: 'Request Project'})
  })

  app.post('/data', async (req, res) => {
    const body = _.pick(req.body, ['name', 'rank', 'quote', 'isMajor', 'career']);
    var mem = new Member(body);

    try {
      await mem.save()
      res.send('It saved')
    } catch (e) {
      res.status(400).send(e);
    }
  
  })

  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  })

}
