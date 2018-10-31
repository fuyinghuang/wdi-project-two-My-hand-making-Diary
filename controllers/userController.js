const User = require('../models/user');

function userShow(req, res, next) {
  console.log('we are in user show');
  User
    .findById(req.params.id)
    .populate('addedHandmades')
    .then(user => {
      console.log(user.comments);
      res.render('profile', user);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

module.exports = {
  show: userShow
};
