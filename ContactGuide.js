import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

// Define a styled component with customizable background image
const ContactGuideContainer = styled(Container)`
  padding: 60px 0;
  background: url(${props => props.bgImage || 'https://via.placeholder.com/1500x800'}) no-repeat center center;
  background-size:cover;
  color: #fff;
  min-height: 100vh;
`;

const FormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent background for better readability */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled(Form.Group)`
  margin-bottom: 15px;
`;

const FormLabel = styled(Form.Label)`
  color: #ddd;
  font-size: 1rem;
`;

const FormControl = styled(Form.Control)`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const ContactGuide = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', { name, email, message });
    alert('Message sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactGuideContainer bgImage="https://media.istockphoto.com/id/577303888/photo/salto-80m-waterfall-in-chapada-dos-veadeiros-goias-brazil.jpg?s=612x612&w=0&k=20&c=dJbG_pZXguofbnn7hW_gyW5j8c42L6QuaF4tJ2xbJf8=">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <FormWrapper>
              <FormTitle>Contact a Guide</FormTitle>
              <StyledForm onSubmit={handleSubmit}>
                <FormGroup controlId="formName">
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup controlId="formEmail">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup controlId="formMessage">
                  <FormLabel>Message</FormLabel>
                  <FormControl
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </FormGroup>
                <SubmitButton type="submit">Send Message</SubmitButton>
              </StyledForm>
            </FormWrapper>
          </Col>
        </Row>
      </Container>
    </ContactGuideContainer>
  );
};

export default ContactGuide;
