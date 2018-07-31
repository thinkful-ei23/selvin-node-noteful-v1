'use strict';

// Load array of notes

console.log('Hello Noteful!');

// INSERT EXPRESS APP CODE HERE...
const express = require('express');
const data = require('./db/notes');
//const morgan = require('morgan');
const app = express();
const { PORT } = require('./config');
const logStuff = require('./middleware/logger');
// ADD STATIC SERVER HERE
// Create a static webserver
//app.use(morgan('dev'));
app.use(express.static('public'));
app.use(logStuff);
// Listen for incoming connections
app.listen(PORT, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});

app.get('/api/notes', (req, res) => {
    
    const query = req.query;
    let list = data;
    if(query.searchTerm) {
      list = data.filter( function(item) {
        return item.title.includes(query.searchTerm);
      });
    }

    res.json(list);


  });
app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  res.json(data.find(item => item.id === Number(id)));
  
});