const handmadeController = require('../controllers/handmadeController');
const authController = require('../controllers/authController');
const commentController = require('../controllers/commentController');
const secureRoute = require('../lib/secureRoute');
const userController = require('../controllers/userController');
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

// Tools page route
router.get('/handmades/tools',  handmadeController.toolsRoute);

// Materials page route
router.get('/handmades/materials',  handmadeController.materialsRoute);

// INDEX route
router.get('/handmades',handmadeController.indexRoute);


//  NEW route
router.get('/handmades/new', secureRoute, handmadeController.newRoute);


// CREATE route
router.post('/handmades', secureRoute, handmadeController.createRoute);

//EDIT route
router.get('/handmades/:id/edit', secureRoute, handmadeController.editRoute);


//UPDATED route
router.put('/handmades/:id', secureRoute,handmadeController.updateRoute);

// DELETE router
router.delete('/handmades/:id', secureRoute,handmadeController.deleteRoute);

// SHOW route
router.get('/handmades/:id', handmadeController.showRoute);

// Comment CREATE route
router.post('/handmades/:id/comments', secureRoute, commentController.createCommentRoute);

// Comment DELETE route
router.delete('/handmades/:id/comments/:commentId', secureRoute, commentController.deleteCommentRoute);

router.get('/user/:id',  secureRoute, userController.show);

module.exports = router;
