const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const posts = [];

const handleEvents = (type, data) => {
  if (type === 'PostCreated') {
    const { id, title } = data;
    posts.push({id, title, comments: []});
  }
  else if (type == 'CommentCreated') {
    const { id, content, postId, status } = data;
    const post = posts.filter((post) => post.id === postId)[0];

    post.comments.push({ id, content, status });
  }
  else if (type == 'CommentUpdated') {
    const { id, content, postId, status } = data;
    const post = posts.filter((post) => post.id === postId)[0];

    post.comments = post.comments.filter((comment) => comment.id !== id);
    post.comments.push({ id, content, status });
  }
};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  handleEvents(type, data);

  res.send({});
});

app.listen(3003, async () => {
  console.log('Server running at port 3003');

  axios.get('http://event-bus-srv:3004/events')
   .then((events) => events.data.forEach((event) => handleEvents(event.type, event.data)))
   .catch((error) => console.log(error.message));
});
