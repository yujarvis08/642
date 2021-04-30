import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ExampleMealModal from "./ExampleMealModal";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Meals = () => {
  const [showAdd, setShowAdd] = React.useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <Nav.Link href="/stats/weekly" className="text-white">
              Your Statistics
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container style={{ display: "flex", flexWrap: "wrap" }}>
        <Card onClick={handleShow} style={{ width: "20rem", margin: "1em" }}>
        <Card.Title>Example Meal 1</Card.Title>
        <Card.Body>My breakfast today</Card.Body>
        </Card>
        <ExampleMealModal showState={show} handleClose={handleClose} />

        <Card style={{ width: "20rem", margin: "1em" }}>
          <Card.Body>
            <Card.Title>Add a Meal</Card.Title>
            <Button onClick={handleShowAdd}>+</Button>

            <Modal show={showAdd} onHide={handleCloseAdd}>
              <Modal.Header closeButton>
                <Modal.Title>What are you eating today?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form style={{ textAlign: "left" }}>
                  <Form.Row>
                    <Form.Label>Carbohydrates (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                  <br></br>
                  <Form.Row>
                    <Form.Label>Fat (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                  <br></br>
                  <Form.Row>
                    <Form.Label>Saturated Fat (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                  <br></br>
                  <Form.Row>
                    <Form.Label>Sugar (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                  <br></br>
                  <Form.Row>
                    <Form.Label>Sodium (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                  <br></br>
                  <Form.Row>
                    <Form.Label>Protein (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                  <br></br>
                  <Form.Row>
                    <Form.Label>Vitamin A (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                  <br></br>
                  <Form.Row>
                    <Form.Label>Vitamin C (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                  <br></br>
                  <Form.Row>
                    <Form.Label>Fiber (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                  <br></br>
                  <Form.Row>
                    <Form.Label>Potassium (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                  <br></br>
                  <Form.Row>
                    <Form.Label>Zinc (g)</Form.Label>
                    <Form.Control />
                  </Form.Row>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAdd}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleCloseAdd}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default Meals;
