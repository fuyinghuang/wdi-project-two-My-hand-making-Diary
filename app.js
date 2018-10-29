const express = require('express');
const app = express();
const handMade = require('./db/data');
const port = 4000;
// const Cake = require('./models/cake');



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

// show route
app.get('/handmades/:id', function(req, res) {
  const handmade = handMade.handmades.filter(handmade =>
    handmade.id === req.params.id)[0];
  res.render('handmades/show', handmade);
});




app.listen(port, () => console.log(`Listening changes for port ${port}`));
