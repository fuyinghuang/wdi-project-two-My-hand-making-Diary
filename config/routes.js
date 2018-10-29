const handmadeController = require('../controllers/handmadeController');
const router = require('express').Router();




// Home page
router.get('/', function(req, res) {
  res.render('home');
});

// About page
router.get('/about', function(req, res) {
  res.render('about');
});


// INDEX route
router.get('/handmades',handmadeController.indexRoute);


//  NEW route
router.get('/handmades/new', handmadeController.newRoute);


// listen for POST requests to handmades
router.post('/handmades', handmadeController.createRoute);

// SHOW route
router.get('/handmades/:id', handmadeController.showRoute);



module.exports = router;
