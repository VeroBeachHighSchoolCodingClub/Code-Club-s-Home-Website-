const {Member} = require('../db/models/members');
const {Project} = require('../db/models/projects');
const {ContentH} = require('../db/models/hContent');
const {About} = require('../db/models/aAbout');
const {Picture} = require('../db/models/cPicture');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');

module.exports = (app) => {

  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    ContentH.find({}, (err, content) => {
      Picture.find({}, (err, pic) => {
        res.render('home', {location: 'Home', cont: content, pic: pic, tag: 'The VBHS Coding Club'})
      })
    });
  });

  app.get('/about', (req, res) => {
    Member.find({}, (err, members) => {
      About.find({}, (err, ab) => {
        res.render('about', {location: 'About', members: members, about: ab, tag: 'About the VBHS Coding Club'})
      })
    });
  });

  app.get('/projects', (req, res) => {
    Project.find({}, (err, pro) => {
      res.render('projects', {location: 'Our Projects', projects: pro, tag: 'Club Projects'})
    });
  });

  app.get('/email', (req, res) => {
    res.render('email', {location: 'Request Project'})
  });

  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  });

}
