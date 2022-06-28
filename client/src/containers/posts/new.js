import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import { postCreateApi } from '../../apis/posts/create';

export const CreationForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (event) => {
    const { title } = event;
    await postCreateApi({ title });
  };

  return (
    <div>
      <h3>Create Blog</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control {...register('title', { reuired: true })}></Form.Control>
        </Form.Group>
        <Button className='mt-2' type='submit'>Submit</Button>
      </Form>
    </div>
  );
};
