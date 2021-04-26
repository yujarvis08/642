import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";

const Diets = () => {
  return (
    <Container>
      
      <Navbar bg="secondary" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="text-white">
              Calendar
            </Nav.Link>
            <Nav.Link href="/diets" className="text-white">
              Recommended Diets
            </Nav.Link>
            <Nav.Link href="/meals" className="text-white">
              Set a Meal
            </Nav.Link>
            <Nav.Link href="/values/men" className="text-white">
              Daily Values
            </Nav.Link>
            <Nav.Link href="/stats" className="text-white">
              Your Statistics
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container style={{ display: "flex", flexWrap: "wrap" }}>
        <Card style={{ width: "20rem", margin: "1em" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Keto</Card.Title>
            <Card.Text>
              The Keto diet is a strict diet that consists of high protein and
              low carbohydrates.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem", margin: "1em" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Vegetarian</Card.Title>
            <Card.Text>
              The Vegetarian diet consists of mostly plant based foods like
              vegetables and fruits. It does not consist of any kind of animal
              meat.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem", margin: "1em" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Low-Fat Diet</Card.Title>
            <Card.Text>
              As the name suggests, this diet consists of eating low fat foods.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem", margin: "1em" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Mediterranian</Card.Title>
            <Card.Text>
              The Mediterranian diet is based on foods that people in Greece,
              Italy, and Spain used to eat. It consists of eating many foods
              like vegetables, fruits, nuts, seafood, and grains.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem", margin: "1em" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Mediterranian</Card.Title>
            <Card.Text>
              The Mediterranian diet is based on foods that people in Greece,
              Italy, and Spain used to eat. It consists of eating many foods
              like vegetables, fruits, nuts, seafood, and grains.
            </Card.Text>
          </Card.Body>
        </Card>

      </Container>

    </Container>
  );
};

export default Diets;
