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
    content: req.body.content,
    status: 'pending'
  };

  postComments.push(comment);
  comments[req.params.id] = postComments;

  await axios.post('http://event-bus-srv:3004/events', {
    type: 'CommentCreated',
    data: {
      ...comment,
      postId: req.params.id
    }
  });

  res.status(201).send(comment);
});

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentModerated') {
    const { id, content, postId, status } = data;

    const comment = comments[postId].filter((comment) => comment.id === id)[0];
    comment.status = status;

    await axios.post('http://event-bus-srv:3004/events', {
      type: 'CommentUpdated',
      data: { id, content, postId, status }
    });
  }

  res.send({});
});

app.listen(3002, () => {
  console.log('Server running at port 3002');
});
