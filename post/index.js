const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { randomBytes } = require('crypto');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const posts = [];

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const post = {
    id: randomBytes(4).toString('hex'),
    title: req.body.title
  };

  posts.push(post);

  await axios.post('http://localhost:3004/events', {
    type: 'PostCreated',
    data: post
  });

  res.status(201).send(post);
});

app.post('/events', (req, res) => {
  console.log('Event Received: ', req.body.type);

  res.send({});
});

app.listen(3001, () => {
  console.log('Server running at port 3001');
});
