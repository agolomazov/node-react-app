const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

const port = process.env.PORT || 5000;
app.listen(port);