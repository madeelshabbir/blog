const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');

const app = express();

app.use(cors());

const comments = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(comments[req.params.id] || []);
});

app.post('/posts/:id/comments', bodyParser.json(), (req, res) => {
  const postComments = comments[req.params.id] || [];
  const comment = {
    id: randomBytes(4).toString('hex'),
    content: req.body.content
  };

  postComments.push(comment);
  comments[req.params.id] = postComments;
  res.status(201).send(comment);
});

app.listen(3002, () => {
  console.log('Server running at port 3002');
});
