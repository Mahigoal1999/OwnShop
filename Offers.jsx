import React from "react";
import './Offers.css'; // Assuming you have a CSS file for styling
import exclusive_image from '../Assets/exclusive_image.png'; // Update the path as necessary
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>OFFERS</h1>
        <div className="offers-list">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;