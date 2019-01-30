const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');
const _               = require('lodash');
const multer          = require('multer');
const fs              = require('fs-extra');
const path            = require('path');

const {Member}        = require('../db/models/members');
const {Project}       = require('../db/models/projects');
const {Content}       = require('../db/models/content');
const {authenticate}  = require('../db/middleware/authenticate');
const {User}          = require('../db/models/user'); 

var filePath = './uploads/';
var storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, filePath)
  },
  filename: function (request, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + '.' + file.originalname);
  }
});

var upload = multer({ storage: storage });

var cookieOpts = {maxAge: 18000000} // 5 Hour until cookie expires

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
    res.render('index', {location: 'Login'});
  })

  app.post('/users', authenticate, async (req, res) => {
    const body = _.pick(req.body, ['username', 'password']);
    const user = new User(body);
    try {
      await user.save()
      const token = await user.generateAuthToken();
      res.cookie('logged_in', token, cookieOpts).redirect('/admin/dashboard');
    } catch (e) {
      if (e) throw e;
      res.status(400).json({
        "message": "Sorry, that didn't work.",
        "error": e
      });
    }
  
  });
  
  app.post('/users/login', async (req, res) => {
    try {
      const body = _.pick(req.body, ['username', 'password']);
      const user = await User.findByCredentials(body.username, body.password);
      const token = await user.generateAuthToken();
      res.cookie('logged_in', token, cookieOpts).redirect('/admin/dashboard');
    } catch (e) {
      res.status(400).redirect('/index');
    }
  });

/** Protected Routes **/

  // get
  app.get('/admin', authenticate, (req, res) => {
    res.redirect('/admin/dashboard');
  })
  app.get('/admin/dashboard', authenticate, (req, res) => {
    User.find({}, (err, user) => {
      res.render('admin_dashboard', {location: 'Admin', ad: user});
    });
  });

  app.get('/admin/content', authenticate, (req, res) => {
    res.render('admin_content', {location: 'Admin'});
  });

  app.get('/admin/members', authenticate, (req, res) => {
    res.render('admin_members', {location: 'Admin'});
  });

  app.get('/admin/project', authenticate, (req, res) => {
    res.render('admin_project', {location: 'Admin'});
  });

  app.get('/admin/user', authenticate, (req, res) => {
      res.render('admin_create');
  });

  app.get('/admin/logout', authenticate, async (req, res) => {
    try {
      await res.clearCookie('logged_in');
      res.status(200).redirect('/index');
    } catch (e) {
      res.status(400).json({
        "message": "Sorry, that didn't work.",
        "error": e
      });
    }
  })

  // post
  app.post('/admin/content/edit', authenticate, async (req, res) => {
    const body = _.pick(req.body, ['title', 'content']);
    const cont = new Content(body);
    try {
      await cont.save()
      res.redirect('/admin/dashboard');
    } catch (e) {
      res.status(400).json({
        "message": "Sorry, that didn't work.",
        "error": e
      });
    }
  });

  app.post('/admin/members/edit', authenticate, upload.single('picture'), async (req, res) => {
    const body = req.body;
    const file = req.file;

    const mem = new Member ({
      name: body.name,
      rank: body.rank,
      leader: body.leader
    })
    mem.picture.data = new Buffer.from(fs.readFileSync(file.path)).toString("base64");
    mem.picture.contentType = file.mimetype;
    mem.picture.picName = file.filename;

    try { 
      await mem.save();
      res.redirect('/admin/dashboard');
    } catch (e) {
      res.status(400).json({
        "message": "Sorry, that didn't work.",
        "error": e
      });
    }
  });

  app.post('/admin/project/edit', authenticate, upload.single('picture'), async (req, res) => {
    const body = req.body;
    const file = req.file;
    
    const pro = new Project({
      name: body.name,
      year: body.year,
      url: body.url,
      dis: body.dis,
      source: body.source,
      alt: body.alt,
      margin: body.margin,
      id: body.id
    });

    pro.picture.data = new Buffer.from(fs.readFileSync(file.path)).toString("base64");
    pro.picture.contentType = file.mimetype;
    pro.picture.picName = file.filename;

    try {
      await pro.save();
      res.redirect('/admin/dashboard');
    } catch (e) {
      res.status(400).json({
        "message": "Sorry, that didn't work.",
        "error": e
      });
    }
  });

  //Update

  app.patch('/admin/members/update', upload.single('picture'), async (req, res) => {
    const body = _.pick(req.body, ['name', 'rank', 'leader', 'picture']);
    fileObject = {
      data: new Buffer.from(fs.readFileSync(req.file.path)).toString("base64"),
      contentType: req.file.mimetype,
      picName: req.file.filename
    }
    const file = _.pick(req.file, ['path', 'mimetype', 'filename']);
    const pictureVar = {
      picture: {
        data: new Buffer.from(fs.readFileSync(file.path)).toString("base64"),
        contentType: file.mimetype,
        picName: file.filename
      }
    }
    // 
    // const file = req.file;
    //
    Member.updateOne({name: req.body.name}, {$set: body, $set: pictureVar}).then((mem) => {
      console.log(pictureVar);
      // console.log(fileEl);
      console.log(body);
      if (!mem) {
        res.status(404).send();
      }

      res.send({mem})
    }).catch((e) => {
      res.status(400).send(e);
    })
  })


  app.get('*', (req, res) => {
    res.status(404).send("404 -- Sorry, we couldn't find your request.");
  });
}
