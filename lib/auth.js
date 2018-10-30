const User = require('../models/user');

function checkAuthStatus(req, res, next) {
  console.log('Checking for user', req.session.userId);
  console.log('Incoming request', req.method, req.originalUrl);
  // Check if a user is logged in:
  if (req.session.userId) {
    User.findById(req.session.userId).then(user => {
      res.locals.currentUser = user;
      res.locals.isLoggedIn = true;
      console.log('res.locals.currentUser', res.locals.currentUser);
      // We have finished. So invoke next:
      next();
    });
  } else {
    next();
  }
}


module.exports = {
  checkAuthStatus: checkAuthStatus
};
