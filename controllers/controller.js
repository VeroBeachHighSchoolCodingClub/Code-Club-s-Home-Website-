const {Member} = require('../db/models/members');
const {Project} = require('../db/models/projects');
const {Content} = require('../db/models/content');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');

module.exports = (app) => {

  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    Content.find({}, (err, contents) => {
      Member.find({}, (err, members) => {
        res.render('home', {location: 'Home', cont: contents, mem: members, tag: 'The VBHS Coding Club'})
      });
    });
  });

  app.get('/about', (req, res) => {
    Content.find({}, (err, contents) => {
      Member.find({}, (err, members) => {
        res.render('about', {location: 'About', cont: contents, mem: members, tag: 'About the VBHS Coding Club'})
      });
    });
  });

  app.get('/projects', (req, res) => {
    Content.find({}, (err, contents) => {
      Project.find({}, (err, projects) => {
        res.render('projects', {location: 'Our Projects', cont: contents, projects: pro, tag: 'Club Projects'})
      });
    });
  });

  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  });

}
