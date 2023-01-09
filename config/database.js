// our DB connection function goes here
const mongoose = require('mongoose');

const connectDB = async () => {
    try {           // make an attempt to do this 
        const conn = await mongoose.connect(process.env.DB_CONNECTION); // look in the env file, find the DB_CONNECTION variable and bring that in 
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err) { // if something goes wrong, catch the error and do something with it 
        console.log(err);
        process.exit(1) // exit the function
    }
}

module.exports = connectDB // export the function connectDB that we made on line 4 so we can call it in other places