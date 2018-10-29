const Handmade = require('../models/handmade');




function homeRoute(req, res) {
  res.render('home');
}

function aboutRoute(req, res) {
  res.render('about');
}



function indexRoute(req, res) {
  Handmade.find().then(function(result) {
    res.render('handmades/index', { handmades: result });
  });
}

function newRoute(req, res) {
  res.render('handmades/new');
}


function createRoute(req,res){
  console.log('this is the request', req.method, req.body, req.method);
  // req.body.id = Math.floor(Math.random()*1000);
  // handMade.handmades.push(req.body);
  Handmade.create(req.body).then(handmade => {
    console.log('Create a handmade', handmade);
    res.redirect('/handmades');
  });
}

function editRoute(req,res){
  Handmade.findById(req.params.id).then(function(result){
    res.render('handmades/edit', result);
  });
}



function updateRoute(req, res){
  Handmade.findByIdAndUpdate(req.params.id, req.body).then((result) =>{
    res.redirect(`/handmades/${result._id}`);
  });
}



function showRoute(req, res){
  Handmade.findById(req.params.id).then(function(result){
    res.render('handmades/show', result);
  });
}





module.exports = {
  indexRoute: indexRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  showRoute: showRoute,
  homeRoute: homeRoute,
  aboutRoute: aboutRoute,
  editRoute: editRoute,
  updateRoute: updateRoute
};
