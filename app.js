const express = require('express');
const app = express();
// const handMade = require('./db/data');
// // const port = 4000;
// const Handmade = require('./models/handmade');
const mongoose = require('mongoose');
const env = require('./config/environment');
const router = require('./config/routes');
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
app.use(router);












app.listen(env.port, () => console.log(`Listening changes for port ${env.port}`));
