import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HarrowMovieHallScreen = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrices = {
    A1: 8, A2: 8, A3: 8, A4: 8, A5: 8, A6: 8, A7: 8, A8: 8, A9: 8, A10: 8,
    A11: 8, A12: 8, A13: 8, A14: 8, B1: 8, B2: 8, B3: 8, B4: 8, B5: 8, B6: 8,
    B7: 8, B8: 8, B9: 8, B10: 8, B11: 8, B12: 8, B13: 8, B14: 8, C1: 8, C2: 8,
    C3: 8, C4: 8, C5: 8, C6: 8, C7: 8, C8: 8, C9: 8, C10: 8, C11: 8, C12: 8,
    C13: 8, C14: 8, D1: 8, D2: 8, D3: 8, D4: 8, D5: 8, D6: 8, D7: 8, D8: 8,
    D9: 8, D10: 8, D11: 8, D12: 8, D13: 8, D14: 8, E1: 13, E2: 13, E3: 13,
    E4: 13, E5: 13, E6: 13, E7: 13, E8: 13, E9: 13, E10: 13, E11: 13, E12: 13,
    E13: 13, E14: 13, F1: 13, F2: 13, F3: 13, F4: 13, F5: 13, F6: 13, F7: 13,
    F8: 13, F9: 13, F10: 13, F11: 13, F12: 13, F13: 13, F14: 13, G1: 13, G2: 13,
    G3: 13, G4: 13, G5: 13, G6: 13, G7: 13, G8: 13, G9: 13, G10: 13, G11: 13,
    G12: 13, H1: 13, H2: 13, H3: 13, H4: 13, H5: 13, H6: 13, H7: 13, H8: 13,
    H9: 13, H10: 13, H11: 13, H12: 13, I1: 10, I2: 10, I3: 10, I4: 10, I5: 10,
    I6: 10, I7: 10, I8: 10, I9: 10, I10: 10, I11: 10, I12: 10, J1: 10, J2: 10,
    J3: 10, J4: 10, J5: 10, J6: 10, J7: 10, J8: 10, J9: 10, J10: 10, J11: 10,
    J12: 10, K1: 10, K2: 10, K3: 10, K4: 10, K5: 10, K6: 10, K7: 10, K8: 10,
    K9: 10, K10: 10, L1: 10, L2: 10, L3: 10, L4: 10, L5: 10, L6: 10, L7: 10,
    L8: 10, L9: 10, L10: 10, M1: 10, M2: 10, M3: 10, M4: 10, M5: 10, M6: 10,
    M7: 10, M8: 10, M9: 10
  };

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  // Seat map configuration
  const rows = [
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8','A9', 'A10', 'A11', 'A12', 'A13', 'A14'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8','B9','B19','B11','B12','B13','B14'],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14'],
    ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14'],
    ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14'],
    ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14'],
    ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12' ],
    ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12'],
    ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10', 'I11', 'I12'],
    ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10', 'J11', 'J12'],
    ['K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'K10' ],
  ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10'],
  ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9'],
  ];

  const isSeatAvailable = (seatNumber) => {
    return !selectedSeats.includes(seatNumber);
  };

  const getSeatPrice = (seatNumber) => {
    return seatPrices[seatNumber];
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedSeats.forEach((seat) => {
      totalPrice += getSeatPrice(seat);
    });
    return totalPrice;
  };

  return (
    <Container>
      <h1>Movie Hall Seat Selection</h1>
      <div class="d-grid gap-2">
        DOOR<button class="btn btn-lg btn-danger" type="button" style={{margin:'1rem'}}>Screen</button>
        </div>

      <Row>
        <Col md={12}>
          <div className="seat-map">
            {rows.map((row, rowIndex) => (
              <Row key={rowIndex}>
                {row.map((seat) => {
                  const isAvailable = isSeatAvailable(seat);
                  const isActive = selectedSeats.includes(seat);
                  const seatStyle = {
                    marginTop: '0.2rem',
                    marginLeft: '-1.7rem',
                    textAlign: 'center',
                    background: isAvailable ? (isActive ? 'yellow' : 'green') : 'gray',
                  };

                  return (
                    <Col key={seat} className="text-center">
                      <Button
                        variant="outline-secondary"
                        style={{ ...seatStyle, fontSize: '50%' }}
                        onClick={() => handleSeatClick(seat)}
                        disabled={!isAvailable}
                        active={isActive}
                        className="small-button"
                      >
                        {seat} - ${getSeatPrice(seat)}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            ))}
          </div>
        </Col>
        <Col md={4} class='py-3'>
          <div className="selected-seats">
            <h3>Selected Seats:</h3>
            <ul>
              {selectedSeats.map((seat) => (
                <li key={seat}>
                  {seat} - ${getSeatPrice(seat)}
                </li>
              ))}
            </ul>
            <h3>Total Price: ${calculateTotalPrice()}</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HarrowMovieHallScreen;
