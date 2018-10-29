const express = require('express');
const app = express();
// const handMade = require('./db/data');
// const port = 4000;
const Handmade = require('./models/handmade');
const mongoose = require('mongoose');
const env = require('./config/environment');
// mongoose.connect('mongodb://localhost/handmades');
mongoose.connect(env.dbUri);


// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Set up ejs as the view engine of Express
const expressEjsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');   //Express knows that views are written in ejs
app.use(expressEjsLayouts);
app.use(express.static('public'));



// Home page
app.get('/', function(req, res) {
  res.render('home');
});

// About page
app.get('/about', function(req, res) {
  res.render('about');
});

// index page
app.get('/handmades',function(req, res) {
  Handmade.find().then(function(result) {
    res.render('handmades/index', { handmades: result });
  });
});



//  NEW route
app.get('/handmades/new', function(req, res) {
  res.render('handmades/new');
});


// listen for POST requests to handmades
app.post('/handmades', function(req,res){
  console.log('this is the request', req.method, req.body, req.method);
  // req.body.id = Math.floor(Math.random()*1000);
  // handMade.handmades.push(req.body);
  Handmade.create(req.body).then(handmade => {
    console.log('Create a handmade', handmade);
    res.redirect('/handmades');
  });
});


// DELETE route



// SHOW route
// app.get('/handmades/:id', function(req, res) {
//   const handmade = handMade.handmades.filter(handmade =>
//     handmade.id === req.params.id)[0];
//   res.render('handmades/show', handmade);
// });
app.get('/handmades/:id', function(req, res){
  Handmade.findById(req.params.id).then(function(result){
    res.render('handmades/show', result);
  });
});







app.listen(port, () => console.log(`Listening changes for port ${port}`));
