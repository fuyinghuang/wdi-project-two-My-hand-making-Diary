const express = require('express');
const app = express();
// const handMade = require('./db/data');
// // const port = 4000;
// const Handmade = require('./models/handmade');
const session = require( 'express-session');
const mongoose = require('mongoose');
const env = require('./config/environment');
const router = require('./config/routes');
const methodOverride = require('method-override');
// mongoose.connect('mongodb://localhost/handmades');
mongoose.connect(env.dbUri);


// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false }));
// Set up ejs as the view engine of Express
const expressEjsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');   //Express knows that views are written in ejs
app.use(expressEjsLayouts);
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(router);





// const express = require('express'); // Access the express package
// const expressLayouts = require('express-ejs-layouts'); // Access EJS from Express
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
//
// const session = require('express-session');
//
// const mongoose = require('mongoose');
// const env = require('./config/environment');
// const router = require('./config/routes');
//
// mongoose.connect(env.dbUri);
//
// const app = express();
//
// // Use method override to change HTML form POST requests
// // into other types of request like PUT
// app.use(methodOverride('_method'));
//
// // We need this to get the form data into req.body
// app.use(bodyParser.urlencoded({ extended: true }));
//
// // Express session
// app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false }));
//
// // Tell Express to use EJS when doing res.render
// app.set('view engine', 'ejs');
// app.use(expressLayouts);
//
// // Send static files like .js .css .png etc
// // from the public folder:
// app.use(express.static('public'));
//
// app.use(router);





app.listen(env.port, () => console.log(`Listening changes for port ${env.port}`));
