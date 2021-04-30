import React from "react";
import Modal from "react-bootstrap/Modal";

const KetoModal = ({ showState, handleClose }) => {
  return (
    <Modal show={showState} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>The Keto Diet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        The ketogenic diet is a very low carb, high fat diet that shares many
        similarities with the Atkins and low carb diets. It involves drastically
        reducing carbohydrate intake and replacing it with fat. This reduction
        in carbs puts your body into a metabolic state called ketosis. When this
        happens, your body becomes incredibly efficient at burning fat for
        energy. It also turns fat into ketones in the liver, which can supply
        energy for the brain. Ketogenic diets can cause significant reductions
        in blood sugar and insulin levels. This, along with the increased
        ketones, has some health benefits.
        <br></br>
        <br></br>
        Example foods include :
        <br></br>
        Meat: Red Meat, Steak, Ham, Sausage, Bacon, Chicken, and Turkey

        <br></br>
        Fatty Fish: Salmon, Trout, Tuna, and Mackerel

        <br></br>
        Eggs: Pastured or Omega-3 Whole Eggs

        <br></br>
        Butter and Cream: Grass-fed Butter and Heavy Cream

        <br></br>
        Cheese: Unprocessed Cheeses like Cheddar, Goat, Cream, Blue, or
        Mozzarella

        <br></br>
        Nuts and Seeds: Almonds, Walnuts, Flaxseeds, Pumpkin seeds, Chia seeds,
        Etc.
        <br></br>

        Healthy Oils: Extra Virgin Olive Oil, Coconut Oil, and Avocado Oil
        <br></br>

        Avocados: Whole Avocados or Freshly made Guacamole
        <br></br>

        Low Carb Veggies: Green Veggies, Tomatoes, Onions, Peppers, Etc.
        <br></br>

        Condiments: Salt, Pepper, Herbs, and Spices
      </Modal.Body>
      <br></br>
      <br></br>
      <Modal.Footer>Taken from : <br></br>
      https://www.healthline.com/nutrition/ketogenic-diet-101#foods-to-eat</Modal.Footer>
    </Modal>
  );
};

export default KetoModal;
