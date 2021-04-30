import React from "react";
import Modal from "react-bootstrap/Modal";

const VegetarianModal = ({ showState, handleClose }) => {
  return (
    <Modal show={showState} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>The Vegetarian Diet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        The vegetarian diet involves abstaining from eating meat, fish and
        poultry. People often adopt a vegetarian diet for religious or personal
        reasons, as well as ethical issues, such as animal rights. Others decide
        to become vegetarian for environmental reasons, as livestock production
        increases greenhouse gas emissions, contributes to climate change and
        requires large amounts of water, energy and natural RESOURCES. There are
        several forms of vegetarianism, each of which differs in their
        restrictions.
        <br></br>
        <br></br>
        Example Foods:
        <br></br>
        Fruits: Apples, Bananas, Berries, Oranges, Melons, Pears, Peaches
        <br></br>
        Vegetables: Leafy greens, Asparagus, Broccoli, Tomatoes, Aarrots
        <br></br>
        Grains: Quinoa, Barley, Buckwheat, Rice, Oats
        <br></br>
        Legumes: Lentils, Beans, Peas, Chickpeas.
        <br></br>
        Nuts: Almonds, Walnuts, Cashews, Chestnuts
        <br></br>
        Seeds: Flaxseeds, Chia and Hemp seeds
        <br></br>
        Healthy fats: Coconut oil, Olive oil, Avocados
        <br></br>
        Proteins: Tempeh, Tofu, Seitan, Natto, Nutritional Yeast, Spirulina,
        Eggs, Dairy Products
        <br></br>
        <br></br>
      </Modal.Body>
      <Modal.Footer>
        Taken from : <br></br>
        https://www.healthline.com/nutrition/vegetarian-diet-plan#foods-to-eat
      </Modal.Footer>
    </Modal>
  );
};

export default VegetarianModal;
