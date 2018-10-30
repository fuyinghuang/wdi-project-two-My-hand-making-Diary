const User = require('../models/user');


function registerFormRoute(req, res) {
  res.render('auth/register');
}

function registerRoute(req, res) {
  console.log('A new register', req.body);
  User.create(req.body).then(result => {
    console.log('this is register', req.body);
    console.log('User created', result);
    res.redirect('/');
  });
}


function loginFormRoute(req, res) {
  res.render('auth/login');
}


function loginRoute(req, res) {
  console.log('User is logging in', req.body);
  User.findOne({ email: req.body.email }).then(result => {
    if (!result){
      res.redirect('/login');
    }else {
      console.log('Logging in', result);
      req.session.userId = result._id;
      console.log('userid is',req.session.userId) ;
      res.redirect('/');
    }
  });
}


function logoutRoute(req, res) {
  req.session.regenerate(function(){
    res.redirect('/');
  });
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
