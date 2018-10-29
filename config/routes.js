const handmadeController = require('../controllers/handmadeController');
const router = require('express').Router();




// Home page route
router.get('/', handmadeController.homeRoute);

// About page route
router.get('/about',  handmadeController.aboutRoute);

// INDEX route
router.get('/handmades',handmadeController.indexRoute);


//  NEW route
router.get('/handmades/new', handmadeController.newRoute);


// CREATE route
router.post('/handmades', handmadeController.createRoute);

//EDIT route
router.get('/handmades/:id/edit', handmadeController.editRoute);


//UPDATED route
router.put('/handmades/:id',  handmadeController.updateRoute);

// DELETE router
router.delete('/handmades/:id', handmadeController.deleteRoute);


// SHOW route
router.get('/handmades/:id', handmadeController.showRoute);



module.exports = router;
