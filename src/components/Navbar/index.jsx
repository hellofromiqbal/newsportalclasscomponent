import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  };

  handleInputChange = (e) => {
    let newKeyword = e.target.value;
    if(newKeyword.length < 1) {
      newKeyword = 'keyword';
    }
    this.setState({ searchInput: newKeyword });
    this.props.handleSearch(newKeyword);
  }

  render() {
    return (
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <div>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  onChange={(e) => this.handleInputChange(e)}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </Navbar>
    )
  }
};
