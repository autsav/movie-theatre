import React from 'react'
import { Navbar, Container,Nav,Form,Button } from 'react-bootstrap'
const Header = () => {
  return (
    
        <header>
                <Navbar variant='dark'   bg="dark" expand="lg"  collapseOnSelect>
                    <Container fluid >
                      <Navbar.Brand href="/">Movie Theatre</Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                        <Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                        >
                          <Nav.Link href="#action1">WHAT'S ON</Nav.Link>
                          <Nav.Link href="events">BIG SCREEN EVENTS</Nav.Link>
                          <Nav.Link href="#action2">INSIDE MOVIE THEATRE</Nav.Link>
                          <Nav.Link href="#action2">OFFERS</Nav.Link>

                         
                        </Nav>
                       

                        <Nav className="d-flex">
                          <Nav.Link href="/login"><i className='fas fa-sign-in'></i> LOGIN</Nav.Link>
                          <Nav.Link href="/register"><i className='fas fa-user'></i> JOIN</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                          />
                          <Button variant="outline-success">Search</Button>
                        </Form>
                      </Navbar.Collapse>
                    </Container>
          </Navbar>
        </header>
    
  )
}

export default Header