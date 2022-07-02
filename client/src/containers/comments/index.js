import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import { commentIndexApi } from '../../apis/comments';


export const CommentIndex = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    commentIndexApi(postId).then((res) => setComments(res.data));
  }, [postId]);

  return (
    <div>
      {comments.map((comment) =>
        (<Container className='mt-3' key={comment.id}>
          <p>{comment.content}</p>
        </Container>)
      )}
    </div>
  );
}
