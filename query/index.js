const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const posts = [];

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  console.log('Event Received: ', req.body.type);

  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;
    posts.push({id, title, comments: []});
  }
  else if (type == 'CommentCreated') {
    const { id, content, postId } = data;
    const post = posts.filter((post) => post.id === postId)[0];

    post?.comments.push({ id, content });
  }

  res.send({});
});

app.listen(3003, () => {
  console.log('Server running at port 3003');
});
