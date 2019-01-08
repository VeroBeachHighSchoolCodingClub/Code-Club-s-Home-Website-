var {User} = require('./../models/user')

var authenticate = (req, res, next) => {
  var token = req.cookies.logged_in; 

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).redirect('/index');
  })
}

module.exports = {authenticate};