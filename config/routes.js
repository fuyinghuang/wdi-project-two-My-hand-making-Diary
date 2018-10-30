const handmadeController = require('../controllers/handmadeController');
const authController = require('../controllers/authController');
const router = require('express').Router();

// register form route
router.get('/register', authController.registerFormRoute);
// register route(create route)
router.post('/register', authController.registerRoute);

// log in form route
router.get('/login', authController.loginFormRoute);
// log in route
router.post('/login', authController.loginRoute);

// logout route
router.get('/logout', authController.logoutRoute);



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
