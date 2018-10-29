const User = require('../models/user');


function registerFormRoute(req, res) {
  res.render('auth/register');
}

function registerRoute(req, res) {
  // Create a new user
  // req.body contains the data from the registration form
  User.create(req.body).then(result => {
    console.log('User created', result);
    // redirect to the home page
    res.redirect('/');
  });
}

function loginFormRoute(req, res) {
  res.render('auth/login');
}

// Login route
function loginRoute(req, res) {
  console.log('User is logging in', req.body);
  // Process the login.
  // Check for an existing user
  User.findOne({ email: req.body.email }).then(result => {
    // Hopefully, result contains a user
    if (!result){
      // if there is no user
      res.redirect('/login');
    }else {
      // We've found a user in the database! Write the user's
      // ID into their locker (session).
      // (req.session is the locker)
      console.log('Logging in', result);
      req.session.userId = result._id;
      // console.log('userid is',req.session.userId) ;
      res.redirect('/');
    }
  });
}



// Logout route



module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute
};
