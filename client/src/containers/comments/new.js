import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import { commentCreateApi } from '../../apis/comments';

export const CommentCreationForm = ({ postId }) => {
  const { register, handleSubmit} = useForm();
  const onSubmit = async (event) => {
    const { content } = event;
    await commentCreateApi(postId, { content });
};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Add Comment</Form.Label>
        <Form.Control {...register('content')}></Form.Control>
      </Form.Group>
      <Button className='mt-2' type='submit'>Submit</Button>
    </Form>
  );
};
