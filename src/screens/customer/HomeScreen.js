import React from 'react';
import { Carousel, Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <div >
   <Container fluid style={{ marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}>
        <Carousel style={{ width: '80%', margin: 'auto' }} >
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ objectFit: 'cover', height: '100%' }}
              src="https://assetsio.reedpopcdn.com/flash-1_yyujDhk.jpg?width=880&quality=80&format=jpg&dpr=2&auto=webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ objectFit: 'cover', height: '100%' }}
              src="https://images.hdqwalls.com/wallpapers/2023-spiderman-across-the-spiderverse-vw.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ objectFit: 'cover', height: '100%' }}
              src="https://www.spectator.co.uk/wp-content/uploads/2023/05/2KD6NEW.jpg?resize=2048,1232"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container style={{ marginTop: '2rem' }}>
        <Row>
          <Col xs={8} className="d-flex align-items-center">
            <h2 style={{ textTransform: 'uppercase' }}>What's on at</h2>
            <Form.Select style={{ marginLeft: '1rem' }}>
              <option>Harrow</option>
              <option>Covent Garden</option>
              <option>Wembley</option>
            </Form.Select>
            <Button variant="primary" style={{ marginLeft: '1rem' }}>Go</Button>
          </Col>
          <Col xs={4} className="d-flex justify-content-end">
            <Form.Control type="text" placeholder="Start typing a film or event" />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '2rem' }}>
        <Row>
          <Col xs={4}>
            <Card className="custom-card">
              <Card.Img src="https://assetsio.reedpopcdn.com/flash-1_yyujDhk.jpg?width=880&quality=80&format=jpg&dpr=2&auto=webp" style={{ filter: 'brightness(0.6)' }} alt="Image 1" />
              <Card.ImgOverlay>
                <div style={{ position: 'absolute', bottom: '0', left: '0', padding: '1rem' }}>
                  <div style={{ marginBottom: '0.5rem', fontSize: '2rem', textTransform: 'uppercase' }}>What's On</div>
                  <div style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: '#f7941e', textTransform: 'uppercase' }}>Subtitle 1</div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="custom-card">
              <Card.Img src="https://assetsio.reedpopcdn.com/flash-1_yyujDhk.jpg?width=880&quality=80&format=jpg&dpr=2&auto=webp" style={{ filter: 'brightness(0.6)' }} alt="Image 2" />
              <Card.ImgOverlay>
                <div style={{ position: 'absolute', bottom: '0', left: '0', padding: '1rem' }}>
                  <div style={{ marginBottom: '0.5rem', fontSize: '2rem', textTransform: 'uppercase' }}>Coming Soon</div>
                  <div style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: '#f7941e', textTransform: 'uppercase' }}>Plan Ahead</div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={4}>
            <Card className="custom-card">
              <Card.Img src="https://assetsio.reedpopcdn.com/flash-1_yyujDhk.jpg?width=880&quality=80&format=jpg&dpr=2&auto=webp" style={{ filter: 'brightness(0.6)' }} alt="Image 3" />
              <Card.ImgOverlay>
                <div style={{ position: 'absolute', bottom: '0', left: '0', padding: '1rem' }}>
                  <div style={{ marginBottom: '0.5rem', fontSize: '2rem', textTransform: 'uppercase' }}>Metallica Tour</div>
                  <div style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: '#f7941e', textTransform: 'uppercase' }}>Night 1, August 2</div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '2rem' }}>
        <Row><h2 style={{ textTransform: 'uppercase' }}>TOP FILMS</h2></Row>
        <Row xs={1} md={2} lg={4} className="g-4">
          {[...Array(16)].map((_, index) => (
            <Col key={index}>
              <Card className="custom-card">
                <Card.Img
                  src={`https://via.placeholder.com/200x300?text=Movie+${index + 1}`}
                  alt={`Movie ${index + 1}`}
                  variant="top"
                />
                <Card.Body>
                  <Card.Title className="text-uppercase">{`Movie ${index + 1}`}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
