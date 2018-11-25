const {Member} = require('../db/models/members');
const {Mission} = require('../db/models/mission');
const {Project} = require('../db/models/projects');
const {MeetTime} = require('../db/models/meetTime');
const {ContactH} = require('../db/models/hContact');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');

module.exports = (app) => {

  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    Mission.find({}, (err, mis) => {
      MeetTime.find({}, (err, mt) => {
        ContactH.find({}, (err, hc) => {
          res.render('home', {location: 'Home', mission: mis, mt: mt, hc: hc});
        });
      });
    });
  });

  app.get('/about', (req, res) => {
    Member.find({}, (err, members) => {
      res.render('about', {location: 'About', members: members})
    });
  });

  app.get('/projects', (req, res) => {
    Project.find({}, (err, pro) => {
      res.render('projects', {location: 'Our Projects', projects: pro})
    });
  });

  app.get('/email', (req, res) => {
    res.render('email', {location: 'Request Project'})
  });

  app.post('/data', async (req, res) => {
    const body = _.pick(req.body, ['name', 'rank', 'quote', 'type', 'career', 'picture']);
    var mem = new Member(body);

    try {
      await mem.save()
      res.send(mem)
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

  app.post('/project', async (req, res) => {
    const body = _.pick(req.body, ['name', 'year', 'url', 'dis1', 'dis2', 'dis3', 'source', 'picture', 'alt', 'margin', 'id']);
    var pro = new Project(body);

    try {
      await pro.save()
      res.send(pro);
    } catch (e) {
      res.status(400).send(e);
    }
  
  });

  app.post('/mtime', async (req, res) => {
    const body = _.pick(req.body, ['content']);
    var mt = new MeetTime(body);

    try {
      await mt.save()
      res.send(mt);
    } catch (e) {
      res.status(400).send(e);
    }
  
  });

  app.post('/hcontact', async (req, res) => {
    const body = _.pick(req.body, ['content']);
    var hc = new ContactH(body);

    try {
      await hc.save()
      res.send(hc);
    } catch (e) {
      res.status(400).send(e);
    }
  
  });


  app.get('/data', (req, res) => {
    Member.find({}, (err, members) => {
      res.send(members);
    });
  });

  app.get('/mission', (req, res) => {
    Mission.find({}, (err, mis) => {
      res.send(mis);
    });
  });

  app.get('/project', (req, res) => {
    Project.find({}, (err, pro) => {
      res.send(pro);
    });
  });

  app.get('/mtime', (req, res) => {
    MeetTime.find({}, (err, mt) => {
      res.send(mt);
    });
  });

  app.get('/hcontact', (req, res) => {
    ContactH.find({}, (err, hc) => {
      res.send(hc);
    });
  });

  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  });

}
