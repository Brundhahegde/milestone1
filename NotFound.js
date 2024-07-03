import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </Container>
  );
};

export default NotFound;
