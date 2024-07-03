import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';

// Styled container for the feedback section
const FeedbackContainer = styled(Container)`
  padding: 60px 0;
  background: url(${props => props.bgImage || 'https://via.placeholder.com/1500x800'}) no-repeat center center;
  background-size: cover;
  color: #fff;
  min-height: 100vh;
`;

// Wrapper for the feedback form
const FeedbackFormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  max-width: 800px;
  margin: 0 auto;
`;

// Title for the feedback section
const FeedbackTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #f8f9fa;
`;

// Styled form components
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled(Form.Group)`
  margin-bottom: 20px;
`;

const FormLabel = styled(Form.Label)`
  color: #e9ecef;
  font-size: 1.1rem;
`;

const FormControl = styled(Form.Control)`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 12px;
  background: #fff;
`;

const SubmitButton = styled(Button)`
  background-color: #28a745;
  border: none;
  padding: 12px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    background-color: #218838;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && feedback) {
      setAlertMessage('Thank you for your feedback!');
      setAlertVariant('success');
      setShowAlert(true);
      setName('');
      setEmail('');
      setFeedback('');
    } else {
      setAlertMessage('Please fill out all fields.');
      setAlertVariant('danger');
      setShowAlert(true);
    }
  };

  return (
    <FeedbackContainer bgImage="https://media.istockphoto.com/id/1263566856/photo/light-house-at-night-low-light-long-exposure.jpg?s=612x612&w=0&k=20&c=E4jXQkzSGqeaQlUMJs1awdzk83pQUK897gp9Ck-63h4=">
      <FeedbackFormWrapper>
        <FeedbackTitle>We Value Your Feedback</FeedbackTitle>
        {showAlert && (
          <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        )}
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
          <FormGroup controlId="formFeedback">
            <FormLabel>Feedback</FormLabel>
            <FormControl
              as="textarea"
              rows={5}
              placeholder="Enter your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Submit Feedback</SubmitButton>
        </StyledForm>
      </FeedbackFormWrapper>
    </FeedbackContainer>
  );
};

export default Feedback;
