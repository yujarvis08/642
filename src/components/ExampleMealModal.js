import React from "react";
import Modal from "react-bootstrap/Modal";

const ExampleMealModal = ({ showState, handleClose }) => {
  return (
    <Modal show={showState} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>My Breakfast</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Carbohydrates: 44 g 
        <br></br><br></br>
        Fat: 12 g
        <br></br><br></br>
        Saturated Fat: 6 g
        <br></br><br></br>
        Sugar: 20 g
        <br></br><br></br>
        Sodium: 8 g
        <br></br><br></br>
        Protein: 4 g
        <br></br><br></br>
        Vitamin A: 0 g
        <br></br><br></br>
        Vitamin C: 0 g
        <br></br><br></br>
        Fiber: 2 g
        <br></br><br></br>
        Potassium: 1 g
        <br></br><br></br>
        Zinc: 0 g
      </Modal.Body>
    </Modal>
  );
};

export default ExampleMealModal;
