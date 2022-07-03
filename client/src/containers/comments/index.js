import { Container } from 'react-bootstrap';

import { updatedContent } from '../../helpers/comments';

export const CommentIndex = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) =>
        (<Container className='mt-3' key={comment.id}>
          <p>{updatedContent(comment.content, comment.status)}</p>
        </Container>)
      )}
    </div>
  );
}
