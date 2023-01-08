//Declare Variables
const express = require('express');
const app = express(); // we assign express to a variable called app for easier reference
const PORT = 8000;
const mongoose = require('mongoose'); // allows us to talk to the mongo database in an easier way

//Set Middleware
app.set('view engine', 'ejs'); // setting the view engine, this is built into express
// we don't have to use ejs for our view engine, we can use things like react as well
app.set(express.static('public')); // allows us to put static files in a folder called public and tells express to look in that folder for said static files
app.use(express.urlencoded({ extended: true })); // making sure we can parse requests from forms and post requests into our app

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // listening for any input from the user