import React from "react";
import Modal from "react-bootstrap/Modal";

const MediterraneanModal = ({ showState, handleClose}) => {

  return (
    <Modal show={showState} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>The Mediterranean Diet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      The Mediterranean diet is based on the traditional foods that people used to eat in countries like Italy and Greece back in 1960.

Researchers noted that these people were exceptionally healthy compared to Americans and had a low risk of many lifestyle diseases.
        <br></br>
        <br></br>
        Example Foods:
        <br></br>
        Vegetables: Tomatoes, broccoli, kale, spinach, onions, cauliflower, carrots, Brussels sprouts, cucumbers, etc. 
        <br></br>
        Fruits: Apples, bananas, oranges, pears, strawberries, grapes, dates, figs, melons, peaches, etc. 
        <br></br>
        Nuts and seeds: Almonds, walnuts, macadamia nuts, hazelnuts, cashews, sunflower seeds, pumpkin seeds, etc. 
        <br></br>
        Legumes: Beans, peas, lentils, pulses, peanuts, chickpeas, etc.
        <br></br>
        Tubers: Potatoes, sweet potatoes, turnips, yams, etc.
        <br></br>
        Whole grains: Whole oats, brown rice, rye, barley, corn, buckwheat, whole wheat, whole-grain bread and pasta.
        <br></br>
        Fish and seafood: Salmon, sardines, trout, tuna, mackerel, shrimp, oysters, clams, crab, mussels, etc. 
        <br></br>
        Poultry: Chicken, duck, turkey, etc.
        <br></br>
        Eggs: Chicken, quail and duck eggs.
        <br></br>
        Dairy: Cheese, yogurt, Greek yogurt, etc.
        <br></br>
        Herbs and spices: Garlic, basil, mint, rosemary, sage, nutmeg, cinnamon, pepper, etc. 
        <br></br>
        Healthy Fats: Extra virgin olive oil, olives, avocados and avocado oil. 
      </Modal.Body>
      <Modal.Footer>
        Taken From:
        <br></br>
        https://www.healthline.com/nutrition/mediterranean-diet-meal-plan#foods-to-eat
      </Modal.Footer>
    </Modal>
  );
};

export default MediterraneanModal;
