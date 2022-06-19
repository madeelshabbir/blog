const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();

const posts = [];

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', bodyParser.json(), (req, res) => {
  const post = {
    id: randomBytes(4).toString('hex'),
    title: req.body.title
  };

  posts.push(post);
  res.status(201).send(post);
});

app.listen(3001, () => {
  console.log('Server running at port 3001');
});
