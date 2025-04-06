 const mongoose = require('mongoose');

 // define the mongoDB connection URL
 const mongoURL = 'mongodb://localhost:27017/hotelsDB';

 // setup the connection to the database
 mongoose.connect(mongoURL, {
     useNewUrlParser: true,
     useUnifiedTopology: true
 });

 // get the default connection
 // mongoose maintains a default connection object representing the MongoDB connection

 const db = mongoose.connection;

 // define event listeners for the database connection
 
   

    db.on('connected', () => {
     console.log('MongoDB connected to the server successfully!');
    });


    db.on('disconnected', () => {
        console.log('MongoDB disconnected from the server!');
    })

    db.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });

    // export the connection object for use in other modules
    module.exports = db;