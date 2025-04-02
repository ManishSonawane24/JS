const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
})
app.get('/chicken', (req, res) => {
    res.send('Hi sir , How can I help you?, I am here for Chicken order');
});
app.get('/pizza', (req, res) => {
    res.send('Hi sir , How can I help you?, I am here for Pizza order');
});
app.get('/burger', (req, res) => {
    res.send('Hi sir , How can I help you?, I am here for Burger order');
});
app.listen(3000,() => console.log('listening on port 3000!')
)