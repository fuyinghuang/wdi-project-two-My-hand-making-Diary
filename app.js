const express = require('express');
const app = express();
const handMade = require('./db/data');
const port = 4000;
// const Handmade = require('./models/handmade');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/handmades');


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
  res.render('handmades/index', handMade);
});


//  NEW route
app.get('/handmades/new', function(req, res) {
  res.render('handmades/new');
});


// listen for POST requests to cakes
app.post('/handmades', function(req,res){
  console.log('this is the request', req.method, req.body, req.method);
  req.body.id = Math.floor(Math.random()*1000);
  handMade.handmades.push(req.body);
  // Cake.create(req.body);
  res.redirect('/handmades');
});





// SHOW route
app.get('/handmades/:id', function(req, res) {
  const handmade = handMade.handmades.filter(handmade =>
    handmade.id === req.params.id)[0];
  res.render('handmades/show', handmade);
});








app.listen(port, () => console.log(`Listening changes for port ${port}`));
