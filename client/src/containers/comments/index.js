import { Container } from 'react-bootstrap';

export const CommentIndex = ({ comments }) => {
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
