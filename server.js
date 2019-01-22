const express = require('express');

var app = express();

// middleware function
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>hello Express!</h1>');
  res.send({
    name: 'rockie',
    likes: [
      'travel',
      'dancing'
    ]
  })
});

app.listen(3000, () => {
  console.log('Server is up on Port 3000');
});