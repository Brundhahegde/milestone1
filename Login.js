// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Replace the hardcoded credentials with your own logic for validation
//     if (email === 'test@test.com' && password === 'password') {
//       navigate('/home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center mt-5">
//         <Col md={4}>
//           <h2>Login</h2>
//           <Form onSubmit={handleLogin}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Login
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const LoginCard = styled(Card)`
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const StyledButton = styled(Button)`
//   width: 100%;
//   background-color: #007bff;
//   border: none;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const StyledFormControl = styled(Form.Control)`
//   border-radius: 50px;
//   padding: 20px;
// `;

// const StyledFormGroup = styled(Form.Group)`
//   margin-bottom: 20px;
// `;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Replace the hardcoded credentials with your own logic for validation
//     if (email === 'test@test.com' && password === 'password') {
//       navigate('/home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center mt-5">
//         <Col md={6} lg={4}>
//           <LoginCard>
//             <h2 className="text-center mb-4">Login</h2>
//             <Form onSubmit={handleLogin}>
//               <StyledFormGroup controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <StyledFormControl
//                   type="email"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </StyledFormGroup>
//               <StyledFormGroup controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <StyledFormControl
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </StyledFormGroup>
//               <StyledButton variant="primary" type="submit">
//                 Login
//               </StyledButton>
//             </Form>
//           </LoginCard>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  background: url('https://media.istockphoto.com/id/508946710/photo/indian-city-of-mangalore.jpg?s=612x612&w=0&k=20&c=iKzGM5Thj373lXWhkyLkk0Gp7xtsRMQ-2oFsCuc7Irk=') no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginCard = styled(Card)`
  padding: 40px 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.85);
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #007bff;
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;

const StyledFormControl = styled(Form.Control)`
  border-radius: 30px;
  padding: 10px 20px;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 20px;
`;

const LoginTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace the hardcoded credentials with your own logic for validation
    if (email === 'test@test.com' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Background>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6} lg={4}>
            <LoginCard>
              <LoginTitle>Login</LoginTitle>
              <Form onSubmit={handleLogin}>
                <StyledFormGroup controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <StyledFormControl
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </StyledFormGroup>
                <StyledFormGroup controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <StyledFormControl
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </StyledFormGroup>
                <StyledButton variant="primary" type="submit">
                  Login
                </StyledButton>
              </Form>
            </LoginCard>
          </Col>
        </Row>
      </Container>
    </Background>
  );
};

export default Login;
