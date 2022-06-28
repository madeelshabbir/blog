import { Container } from 'react-bootstrap';
import React from 'react';

import { CreationForm } from './containers/posts/new';

export const App = () => {
  return (
    <Container>
      <h1 className='d-flex justify-content-center'>Blog app</h1>
      <CreationForm />
    </Container>
  );
};
