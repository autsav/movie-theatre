import React, { useState } from 'react';
import { Container, Card, Button, Modal, Row, Col, Form,  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const EventListScreen = () => {
  const [showModalOne, setShowModalOne] = useState(false);
  const [selectedEventOne, setSelectedEventOne] = useState(null);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [selectedEventTwo, setSelectedEventTwo] = useState(null);

  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const events = [
    {
      id: 1,
      title: 'Movie Night: Avengers: Endgame',
      date: 'June 25, 2023',
      description: 'Join us for an epic movie night featuring Avengers: Endgame!',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/d1pklzbuyaab0la-1552597012.jpg?crop=0.977xw:0.661xh;0.0226xw,0.0625xh&resize=2048:*',
    },
    {
      id: 2,
      title: 'Special Screening: The Dark Knight',
      date: 'July 10, 2023',
      description: "Don't miss the special screening of The Dark Knight on the big screen!",
      image: 'https://w0.peakpx.com/wallpaper/578/765/HD-wallpaper-dark-knight-poster-batman-dark-knight.jpg',
    },
    // Add more events...
  ];

  const openModalOne = (event) => {
    setSelectedEventOne(event);
    setShowModalOne(true);
  };

  const closeModalOne = () => {
    setShowModalOne(false);
  };

  const openModalTwo = (event) => {
    setSelectedEventTwo(event);
    setShowModalTwo(true);
  };
  
  const closeModalTwo = () => {
    setShowModalTwo(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSeatChoosing = () => {
    // Handle booking logic
    navigate('/movieScreens',{state:{bookingData}});
    console.log('Choose Seat', bookingData);
  };

  return (
    <Container>
      <h1>Event List</h1>
      {events.map((event) => (
        <Card key={event.id} className="mb-4">
          <Row>
            <Col xs={4}>
              <Card.Img variant="top" src={event.image} alt={event.title} style={{ maxWidth: '80%' }} />
            </Col>
            <Col xs={8}>
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.date}</Card.Text>
                <Card.Text>{event.description}</Card.Text>

                <Button variant="primary" onClick={() => openModalTwo(event)}>
                  View Details
                </Button>

                <Button variant="success" className="ml-2" style={{margin:'1rem'}} onClick={() => openModalOne(event)}>
                  Book Event
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}

      <Modal show={showModalOne} onHide={closeModalOne}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEventOne && selectedEventOne.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEventOne && (
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" style={{marginTop:'1rem'}} onClick={handleSeatChoosing}>
                Choose Seat
              </Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalOne}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalTwo} onHide={closeModalTwo}>
            <Modal.Header closeButton>
            <Modal.Title>{selectedEventTwo && selectedEventTwo.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {selectedEventTwo && (
                <>
                <p>{selectedEventTwo.date}</p>
                <p>{selectedEventTwo.details}</p>
                {/* Add more details */}
                </>
            )}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={closeModalTwo}>
                Close
            </Button>
            </Modal.Footer>
            </Modal>
    </Container>
  );
};

export default EventListScreen;
