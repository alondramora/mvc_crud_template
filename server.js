//Declare Variables
const express = require('express');
const app = express(); // we assign express to a variable called app for easier reference
const PORT = 8000;
const mongoose = require('mongoose'); // allows us to talk to the mongo database in an easier way

//Import functions/routes
const connectDB = require('./config/database.js') // imported the location of the database
const homeRoutes = require('./routes/home'); // so our server knows where our home router is 

require('dotenv').config({ path: './config/.env'}) // hey dotenv, here's where my env variables are

// Connect to Database
connectDB() // calls the function that we created in our database file because we imported it in line 8

//Set Middleware
app.set('view engine', 'ejs'); // setting the view engine, this is built into express
// we don't have to use ejs for our view engine, we can use things like react as well
app.set(express.static('public')); // allows us to put static files in a folder called public and tells express to look in that folder for said static files
app.use(express.urlencoded({ extended: true })); // making sure we can parse requests from forms and post requests into our app

//Set Routes
app.use('/', homeRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // listening for any input from the user