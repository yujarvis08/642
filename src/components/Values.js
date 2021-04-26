import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(nutrient, amount) {
  return { nutrient, amount };
}

const rows = [
  createData('Carbohydrates', 300),
  createData('Fat', 78),
  createData('Saturated Fat', 20),
  createData('Sugar', 50),
  createData('Sodium', 24),
  createData('Protein', 50),
  createData('Vitamin A', 0.0009),
  createData('Vitamin C', 0.09),
  createData('Fiber', 28),
  createData('Potassium', 4.7),
  createData('Zinc', 0.011),
];

const Values = () => {
  const classes = useStyles();
    return (
        <Container>

        <Navbar bg="secondary" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"  className="text-white">Calendar</Nav.Link>
            <Nav.Link href="/diets"  className="text-white">Recommended Diets</Nav.Link>
            <Nav.Link href="/meals"  className="text-white">Set a Meal</Nav.Link>
            <Nav.Link href="/values"  className="text-white">Daily Values</Nav.Link>
            <Nav.Link href="/stats"  className="text-white">Your Statistics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

<Dropdown style={{marginTop: '1em', marginBottom: '3em'}}>
  <Dropdown.Toggle bg="info">
    Age Group
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item>Adult Men</Dropdown.Item>
    <Dropdown.Item>Adult Women</Dropdown.Item>
    <Dropdown.Item>Children</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nutrient</TableCell>
            <TableCell align="left">Daily Recommended Amount&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.nutrient}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>
    )
}

export default Values;