const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;

    let newStatus = status;

    if (status === 'pending')
      newStatus = content.includes('orange') ? 'rejected' : 'approved';

    await axios.post('http://localhost:3004/events', {
      type: 'CommentModerated',
      data: { id, content, postId, status: newStatus }
    });
  }

  res.send({});
});

app.listen(3005, () => {
  console.log('Server running at port 3005');
});
