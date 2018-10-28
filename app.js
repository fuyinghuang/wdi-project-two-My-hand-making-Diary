const express = require('express');
const app = express();
const port = 4000;



// Set up ejs as the view engine of Express
const expressEjsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');   //Express knows that views are written in ejs
app.use(expressEjsLayouts);



// Home page
app.get('/', function(req, res) {
  res.render('home');
});

// About page
app.get('/about', function(req, res) {
  res.render('about');
});








app.listen(port, () => console.log(`Listening changes for port ${port}`));
