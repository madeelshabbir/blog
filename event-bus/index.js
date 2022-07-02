const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json);

app.post('/events', (req, res) => {
  const event = req.body;
  axios
  .post('http://localhost:3001/events', event)
  .catch((err) => {
    console.log(err.message);
  });

  axios
  .post('http://localhost:3002/events', event)
  .catch((err) => {
    console.log(err.message);
  });

  axios
  .post('http://localhost:3003/events', event)
  .catch((err) => {
    console.log(err.message);
  });

  res.send({status: 'OK'});
});

app.listen(3004, () => {
  console.log('Server running at port 3004');
});
