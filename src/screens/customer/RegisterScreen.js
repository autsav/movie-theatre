import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';

const RegisterScreen = () => {
  const handleRegister = () => {
    // Handle register logic
  };

  const handleJoinWithGmail = () => {
    // Handle join with Gmail logic
  };

  return (
    <Container style={{ maxWidth: '400px', marginTop: '4rem' }}>
      <h1>Register</h1>
      <Form>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" />
        </Form.Group>

        <Form.Group controlId="formBasicSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter your surname" />
        </Form.Group>

        <Form.Group controlId="formBasicTheatreLocation">
          <Form.Label>Movie Theatre Location</Form.Label>
          <Form.Control as="select" defaultValue="">
            <option>Select a location</option>
            <option>Location 1</option>
            <option>Location 2</option>
            <option>Location 3</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmEmail">
          <Form.Label>Confirm Email address</Form.Label>
          <Form.Control type="email" placeholder="Confirm email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" placeholder="Enter your date of birth" />
        </Form.Group>

        <Form.Group controlId="formBasicPermission">
          <Form.Check type="checkbox" label="I give permission for the movie theatre to contact me for marketing purposes" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleRegister}>
          Join
        </Button>

        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <p>Or join with:</p>
          <Button variant="danger" onClick={handleJoinWithGmail}>
            Join with Gmail
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterScreen;
