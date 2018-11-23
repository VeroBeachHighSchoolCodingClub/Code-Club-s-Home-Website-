const {Member} = require('../db/models/members');
const mongoose = require('mongoose');

module.exports = (app) => {

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

  app.post('/data/:name', (req, res) => {
    nameVal = req.params.name;
    var mem = new Member({
        name: nameVal
    });
    
    mem.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  })

  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  })

}
