import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';

const SignInScreen = () => {
    const handleLogin = () => {
        // Handle login logic
      };
    
      const handleLoginWithGmail = () => {
        // Handle login with Gmail logic
      };
    
      return (
        <Container style={{ maxWidth: '400px', marginTop: '4rem' }}>
          <h1>Login</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
    
            <Button variant="primary" type="submit" onClick={handleLogin} style={{ marginTop: '1rem', textAlign: 'center' }} >
              Login
            </Button>
    
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <p>Or login with:</p>
              <Button variant="danger" onClick={handleLoginWithGmail}>
                Login with Gmail
              </Button>
            </div>
          </Form>
        </Container>
      );
}

export default SignInScreen