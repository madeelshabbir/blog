const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.get('/events', (req, res) => {
  res.send(events);
});

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post('http://post-srv:3001/events', event)
  .catch((err) => console.log(err.message));

  axios.post('http://comment-srv:3002/events', event)
  .catch((err) => console.log(err.message));

  axios.post('http://query-srv:3003/events', event)
  .catch((err) => console.log(err.message));

  axios.post('http://moderation-srv:3005/events', event)
  .catch((err) => console.log(err.message));

  res.send({status: 'OK'});
});

app.listen(3004, () => {
  console.log('Server running at port 3004');
});
