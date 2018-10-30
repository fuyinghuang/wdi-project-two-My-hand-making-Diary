function secureRoute(req, res, next) {
  if(res.session.userId){
    next();
  }else {
    res.redirect('/login');
  }
}



module.exports = secureRoute;
