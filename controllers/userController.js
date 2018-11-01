const User = require('../models/user');

function userShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('addedHandmades')
    .then(user => {
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
