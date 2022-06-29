import { Container } from 'react-bootstrap';
import React from 'react';

import { PostCreationForm } from './containers/posts/new';
import { PostIndex } from './containers/posts';

export const App = () => {
  return (
    <Container>
      <h1 className='d-flex justify-content-center'>Blog app</h1>
      <PostCreationForm />
      <PostIndex />
    </Container>
  );
};
