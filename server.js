const express = require('express');

const port = process.env.PORT || 3000; // default is port 3000
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

app.listen(port, () => {
  console.log(`Server is up on Port ${port}`);
});