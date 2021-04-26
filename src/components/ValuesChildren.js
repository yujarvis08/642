import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(nutrient, amount) {
  return { nutrient, amount };
}

const rowsM = [
  createData("Calories", "1800 kcal"),
  createData("Fat", "25-35% kcal"),
  createData("Milk/Dairy", "3 Cups"),
  createData("Lean Meat/Beans", "5 oz"),
  createData("Fruit", "1.5 Cups"),
  createData("Vegetables", "2.5 Cups"),
  createData("Grains", "6 oz"),
];

const rowsF = [
  createData("Calories", "1600 kcal"),
  createData("Fat", "25-35% kcal"),
  createData("Milk/Dairy", "3 Cups"),
  createData("Lean Meat/Beans", "5 oz"),
  createData("Fruit", "1.5 Cups"),
  createData("Vegetables", "2 Cups"),
  createData("Grains", "5 oz"),
];

const ValuesChildren = () => {
  const classes = useStyles();
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
            <Nav.Link href="/values" className="text-white">
              Daily Values
            </Nav.Link>
            <Nav.Link href="/stats" className="text-white">
              Your Statistics
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Dropdown style={{ marginTop: "1em", marginBottom: "3em" }}>
        <Dropdown.Toggle bg="info">Age Group</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/values/men">Average Adult Men</Dropdown.Item>
          <Dropdown.Item href="/values/women">
            Average Adult Women
          </Dropdown.Item>
          <Dropdown.Item href="/values/children">Children 9-13</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h3>Males</h3>
      <br></br>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nutrient</TableCell>
              <TableCell align="left">Daily Recommended Amount&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsM.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.nutrient}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <br></br>
      <br></br>
      <h3>Females</h3>

      <br></br>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nutrient</TableCell>
              <TableCell align="left">Daily Recommended Amount&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsF.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.nutrient}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
};

export default ValuesChildren;
