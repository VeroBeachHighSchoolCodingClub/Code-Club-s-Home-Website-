const {Member1} = require('../db/models/members_1');
const {Member2} = require('../db/models/members_2');
const {Mission} = require('../db/models/mission');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');

module.exports = (app) => {

  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    Mission.find({}, (err, mis) => {
      res.render('home', {location: 'Home', mission: mis});
    })
  });

  app.get('/about', (req, res) => {
    Member1.find({}, (err, members) => {
      Member2.find({}, (err, members2) => {
        res.render('about', {location: 'About', members: members, members2: members2})
      })
    });
  });

  app.get('/projects', (req, res) => {
    res.render('projects', {location: 'Our Projects'})
  });

  app.get('/email', (req, res) => {
    res.render('email', {location: 'Request Project'})
  });

  app.post('/data', async (req, res) => {
    const body = _.pick(req.body, ['name', 'rank', 'quote', 'isMajor', 'career', 'picture']);
    var mem = new Member1(body);

    try {
      await mem.save()
      res.send(mem)
    } catch (e) {
      res.status(400).send(e);
    }
  
  });

  app.post('/data2', async (req, res) => {
    const body = _.pick(req.body, ['name', 'rank', 'quote', 'isMajor', 'career', 'picture']);
    var mem = new Member2(body);

    try {
      await mem.save()
      res.send(mem);
    } catch (e) {
      res.status(400).send(e);
    }
  
  });

  app.post('/mission', async (req, res) => {
    const body = _.pick(req.body, ['content']);
    var mis = new Mission(body);

    try {
      await mis.save()
      res.send(mis);
    } catch (e) {
      res.status(400).send(e);
    }
  
  });

  app.get('/data', (req, res) => {
    Member1.find({}, (err, members) => {
      res.send(members);
    });
  });

  app.get('/data2', (req, res) => {
    Member2.find({}, (err, members) => {
      res.send(members);
    });
  });

  app.get('/mission', (req, res) => {
    Mission.find({}, (err, mis) => {
      res.send(mis);
    });
  });


  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  });

}
