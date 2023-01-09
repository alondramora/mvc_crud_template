// contains all routes associated with home page
// Handles initial GET request for home page
// Handles POST method request for adding a new item

const express = require('express');
const router = express.Router(); // built in express method called router
const homeController = require('../controllers/home'); // controller for anything having to do with home page

router.get('/', homeController.getIndex); // read route because it's a GET
router.post('/new', homeController.createItem); // create route because it's a POST

module.exports = router; // so that we can reference our router in other files