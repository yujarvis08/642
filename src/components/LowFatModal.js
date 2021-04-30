import React from "react";
import Modal from "react-bootstrap/Modal";

const LowFatModal = ({ showState, handleClose }) => {
  return (
    <Modal show={showState} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>The Low Fat Diet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Low fat diets are mainly to restrict your calorie intake from fats. It
        is beneficial to people who aim to lose weight and fat. Since it
        restricts the amount of fat eaten, it may lead to weight loss and other
        diseases.
        <br></br>
        <br></br>
        Example Foods:
        <br></br>
        Leafy Greens: Kale, Spinach, Arugula, Collard greens, Swiss chard,
        Romaine lettuce,
        <br></br>
        Fruits: Almost all fruits are low in fat and high in vitamins, minerals
        and fiber.
        <br></br>
        Beans and Legumes: Black Beans, Green Beans, Lentils, Lima Beans, Etc.
        <br></br>
        Sweet Potatoes
        <br></br>
        Tart Cherry Juice
        <br></br>
        Cruciferous Vegetables: Broccoli, Cauliflower, Brussels sprouts,
        Cabbage, Bok Choy, Turnips
        <br></br>
        Mushrooms: White button, Crimini, Portabella, Shiitake, Oyster
        <br></br>
        Garlic
        <br></br>
        Ancient Grains: Farro, Bulgur, Spelt, Quinoa
        <br></br>
        White, Lean Fish
        <br></br>
        Chicken Breast
        <br></br>
        Low-Fat Dairy
        <br></br>
        Egg Whites
      </Modal.Body>
      <Modal.Footer>
        Taken From:
        <br></br>
        https://www.healthline.com/nutrition/healthy-low-fat-foods#TOC_TITLE_HDR_14{" "}
        <br></br>{" "}
        https://www.healthline.com/nutrition/best-diet-plans#TOC_TITLE_HDR_6
      </Modal.Footer>
    </Modal>
  );
};

export default LowFatModal;
