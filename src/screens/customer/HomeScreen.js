import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
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
            src="https://www.spectator.co.uk/wp-content/uploads/2023/05/2KD6NEW.jpg?resize=2048,1232"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeScreen;
