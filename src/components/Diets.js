import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Ketoimg from "../images/keto.jpg";
import Vegetarianimg from "../images/vegetarian.jpg";
import Lowfatimg from "../images/lowfat.jpg";
import Mediterraneanimg from "../images/mediterranean.jpg";
import KetoModal from "./KetoModal";
import VegetarianModal from "./VegetarianModal";
import LowFatModal from "./LowFatModal";
import MediterraneanModal from "./MediterraneanModal";
import Row from "react-bootstrap/Row";

const Diets = () => {
  const [showK, setShowK] = React.useState(false);
  const handleCloseK = () => setShowK(false);
  const handleShowK = () => setShowK(true);

  const [showV, setShowV] = React.useState(false);
  const handleCloseV = () => setShowV(false);
  const handleShowV = () => setShowV(true);

  const [showL, setShowL] = React.useState(false);
  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);

  const [showM, setShowM] = React.useState(false);
  const handleCloseM = () => setShowM(false);
  const handleShowM = () => setShowM(true);
  return (
    <Container>
      <Row className="justify-content-around" style={{ zIndex: "9" }}>
        <p class="text-danger">
          THESE ARE DIETS THAT I GOOGLED ON THE INTERNET. I AM NOT RECOMMENDING
          YOU THESE DIETS. THIS IS FOR EDUCATIONAL PURPOSES ONLY. I AM NOT
          RESPONSIBLE FOR ANYTHING THAT YOU FOLLOW ON THIS APP.
        </p>
      </Row>
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
        <Card onClick={handleShowK} style={{ width: "20rem", margin: "1em" }}>
          <KetoModal showState={showK} handleClose={handleCloseK} />
          <Card.Img
            variant="top"
            src={Ketoimg}
            style={{ height: "20rem", width: "20rem" }}
          />
          <Card.Body>
            <Card.Title>Keto</Card.Title>
            <Card.Text>
              The Keto diet is a strict diet that consists of high protein and
              low carbohydrates.
            </Card.Text>
          </Card.Body>
        </Card>
        <KetoModal showState={showK} handleClose={handleCloseK} />

        <Card onClick={handleShowV} style={{ width: "20rem", margin: "1em" }}>
          <Card.Img
            variant="top"
            src={Vegetarianimg}
            style={{ height: "20rem", width: "20rem" }}
          />
          <Card.Body>
            <Card.Title>Vegetarian</Card.Title>
            <Card.Text>
              The Vegetarian diet consists of mostly plant based foods like
              vegetables and fruits. It does not consist of any kind of animal
              meat.
            </Card.Text>
          </Card.Body>
        </Card>
        <VegetarianModal showState={showV} handleClose={handleCloseV} />

        <Card onClick={handleShowL} style={{ width: "20rem", margin: "1em" }}>
          <Card.Img
            variant="top"
            src={Lowfatimg}
            style={{ height: "20rem", width: "20rem" }}
          />
          <Card.Body>
            <Card.Title>Low-Fat Diet</Card.Title>
            <Card.Text>
              As the name suggests, this diet consists of eating low fat foods.
            </Card.Text>
          </Card.Body>
        </Card>
        <LowFatModal showState={showL} handleClose={handleCloseL} />

        <Card onClick={handleShowM} style={{ width: "20rem", margin: "1em" }}>
          <Card.Img
            variant="top"
            src={Mediterraneanimg}
            style={{ height: "20rem", width: "20rem" }}
          />
          <Card.Body>
            <Card.Title>Mediterranean</Card.Title>
            <Card.Text>
              The Mediterranean diet is based on foods that people in Greece,
              Italy, and Spain used to eat. It consists of eating many foods
              like vegetables, fruits, nuts, seafood, and grains.
            </Card.Text>
          </Card.Body>
        </Card>
        <MediterraneanModal showState={showM} handleClose={handleCloseM} />
      </Container>
      <p>Images are from this site: https://unsplash.com/</p>
    </Container>
  );
};

export default Diets;
