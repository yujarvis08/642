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

const MonthlyStats = () => {

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
    const classes = useStyles();

    function createData(nutrient, amount) {
        return { nutrient, amount };
      }
      
      const rows = [
        createData("Carbohydrates", 286.3),
        createData("Fat", 56.9),
        createData("Saturated Fat", 12.3),
        createData("Sugar", 62.3),
        createData("Sodium", 30.8),
        createData("Protein", 62.1),
        createData("Vitamin A", 0.00078),
        createData("Vitamin C", 0.12),
        createData("Fiber", 34.5),
        createData("Potassium", 4.62),
        createData("Zinc", 0.008),
      ];

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

      <h3>Your Monthly Statistics</h3>
      <br></br>
      <br></br>
      <br></br>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nutrient</TableCell>
              <TableCell align="left">
                Average Consumption This Past Month&nbsp;(g)
              </TableCell>
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

export default MonthlyStats;