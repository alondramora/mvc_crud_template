// contains all routes associated with home page
// Handles initial GET request for home page
// Handles POST method request for adding a new item

const express = require('express');
const router = express.Router(); // built in express method called router
const homeController = require(); // controller for anything having to do with home page

router.get('/', homeController.getIndex); // read route because it's a GET