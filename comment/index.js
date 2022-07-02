const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { randomBytes } = require('crypto');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const comments = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(comments[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const postComments = comments[req.params.id] || [];
  const comment = {
    id: randomBytes(4).toString('hex'),
    content: req.body.content
  };

  postComments.push(comment);
  comments[req.params.id] = postComments;

  await axios.post('http://localhost:3004/events', {
    type: 'CommentCreated',
    data: {
      ...comment,
      postId: req.params.id
    }
  });

  res.status(201).send(comment);
});

app.post('/events', (req, res) => {
  console.log('Event Received: ', req.body.type);
  res.send({});
});

app.listen(3002, () => {
  console.log('Server running at port 3002');
});
