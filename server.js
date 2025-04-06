const express = require('express');
const app = express();
const db = require('./db'); 
// Import the database connection

app.get('/', function (req, res) {
  res.send('Hello World!');
})


app.listen(3000,() => console.log('listening on port 3000!')
)
