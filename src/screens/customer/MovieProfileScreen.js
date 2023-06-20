import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'

const MovieProfileScreen = () => {
  const movieTimes = [
    '10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM'
  ];
  return (
    <Container>
      <Row>
        <Col md={8}>
          <img style={{width:'100%'}} src="https://assetsio.reedpopcdn.com/flash-1_yyujDhk.jpg?width=880&quality=80&format=jpg&dpr=2&auto=webp" alt="Movie Poster" />
        </Col>
        <Col md={4}>
          <h1>Movie Name</h1>
          <h2 style={{ fontSize: '15px' }}>Subtitle</h2>
          <p>Mild Threat, Violence, Injury Detail, Language, etc.</p>
          <div style={{ padding: '1rem' }}>
            <p>Description of the movie</p>
            <a href="#">Read the Full Synopsis</a>
            <br />
            <br />
            <p>Movie Hall Location Chooser</p>
            <hr style={{ borderTop: '1px solid #ccc' }} />
            <p style={{ color: '#333', textTransform: 'uppercase', fontWeight: 'bold' }}>
              Upcoming Showings for Today - {new Date().toLocaleDateString()}
            </p>
            <hr style={{ borderTop: '1px solid #ccc' }} />
            <div className="time-buttons">
            {movieTimes.map((time, index) => (
              <Button key={index} variant="primary" style={{ margin: '0.4rem' }}>
                {time}
              </Button>
            ))}
          </div>
           
            <div>
              <Button variant="primary" style={{ textTransform: 'uppercase' }}>
                Get All Times & Tickets
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieProfileScreen