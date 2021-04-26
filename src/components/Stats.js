import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";

const Stats = () => {
    return (
        <Container>
        <Navbar bg="secondary" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"  className="text-white">Calendar</Nav.Link>
            <Nav.Link href="/diets"  className="text-white">Recommended Diets</Nav.Link>
            <Nav.Link href="/meals"  className="text-white">Set a Meal</Nav.Link>
            <Nav.Link href="/values/men"  className="text-white">Daily Values</Nav.Link>
            <Nav.Link href="/stats"  className="text-white">Your Statistics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Dropdown style={{ marginTop: "1em", marginBottom: "3em" }}>
        <Dropdown.Toggle bg="info">Sort By</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/stats/weekly">Weekly</Dropdown.Item>
          <Dropdown.Item href="/stats/monthly">Monthly</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Container>
    )
}

export default Stats;