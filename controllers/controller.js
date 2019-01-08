const {Member} = require('../db/models/members');
const {Project} = require('../db/models/projects');
const {Content} = require('../db/models/content');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {authenticate} = require('../db/middleware/authenticate');
const {User} = require('../db/models/user');

module.exports = (app) => {

  app.use(bodyParser.json());

  /** Public Routes **/

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
        res.render('projects', {location: 'Our Projects', cont: contents, pro: projects, tag: 'Club Projects'})
      });
    });
  });

/** Admin Routes **/

  app.get('/index', (req, res) => {
    res.render('index');
  })

  app.post('/users', async (req, res) => {
    const body = _.pick(req.body, ['username', 'password']);
    const user = new User(body);
    try {
      await user.save()
      const token = await user.generateAuthToken();
      res.header('x-auth', token).send(user);
    } catch (e) {
      if (e) throw e;
      res.status(400).send(e);
    }
  
  });
  

  
  app.post('/users/login', async (req, res) => {
    try {
      const body = _.pick(req.body, ['username', 'password']);
      const user = await User.findByCredentials(body.username, body.password);
      const token = await user.generateAuthToken();
      res.cookie('logged_in', token).redirect('/admin/dashboard');
    } catch (e) {
      res.status(400).send(e);
    }
  });

/** Protected Routes **/

  // get
  app.get('/admin/dashboard', authenticate, (req, res) => {
    res.render('admin_dashboard');
  })

  app.get('/admin/content', authenticate, (req, res) => {
    res.render('admin_content');
  });

  // post
  app.post('/admin/content/edit', authenticate, async (req, res) => {
    const body = _.pick(req.body, ['title', 'content']);
    const cont = new Content(body);
    try {
      await cont.save()
      res.redirect('/admin/content');
    } catch (e) {
      if (e) throw e;
      res.status(400).send(e);
    }
  });




  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  });
}
