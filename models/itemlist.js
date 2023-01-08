// mongoose gives us ability to structure our data
const mongoose = require('mongoose');
// schema: like a blueprint for data in our database
const itemListSchema = new mongoose.Schema({
    textinput: {
        type: String,   // has to be type specified 
        required: true, // cannot be blank
    },
    numinput: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now // sets the default date value to whatever current date is
    }
});

//takes the blueprint we created and specifies 3 params
module.exports = mongoose.model('ItemList', itemListSchema, 'items')
//1. name we will be referring to our schema in our controller and project
//2. name of the schema on line 4
//3. collection name in mongoDB

