import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import second from '../css/Footer.css' // Import custom CSS file

const Footer = () => {
  return (
    <footer className="dark-background">
      <Container className='py-3'>
        <Row>
          <Col>
            <h5 className="footer-heading">GET IN TOUCH</h5>
            <ul className="footer-list">
              <li>FAQs &amp; contact us</li>
              <li>Check your voucher</li>
              <li>Give us feedback</li>
            </ul>
          </Col>
          <Col>
            <h5 className="footer-heading">ABOUT VUE</h5>
            <ul className="footer-list">
              <li>About us</li>
              <li>Big screen experiences</li>
              <li>IMAX</li>
              <li>Advertising and bulk tickets</li>
              <li>Gift cards</li>
              <li>Careers</li>
              <li>Conferencing</li>
              <li>Vue International</li>
              <li>London Vue Cinemas</li>
            </ul>
          </Col>
          <Col>
            <h5 className="footer-heading">LEGAL</h5>
            <ul className="footer-list">
              <li>Terms &amp; conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Allergens and Nutrition</li>
              <li>Accessibility</li>
              <li>Modern Slavery Statement</li>
            </ul>
          </Col>
          <Col>
            <h5 className="footer-heading">SOCIAL</h5>
            <ul className="footer-list">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
