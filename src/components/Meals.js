import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Meals = () => {
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
        <Container style={{ display: "flex", flexWrap: "wrap" }}>
        <Card style={{ width: "20rem", margin: "1em" }}>
          <Card.Body>
            <Card.Title>Add a Meal</Card.Title>
            <Button>+</Button>
          </Card.Body>
        </Card>
        </Container>
      </Container>
    )
}

export default Meals;