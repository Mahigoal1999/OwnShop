import React from "react";
import './Hero.css'; // Assuming you have a CSS file for styling
import hand_icon from '../Assets/hand_icon.png'; // Update the path as necessary
import arrow_icon from '../Assets/arrow.png'; // Update the path as necessary
import hero_image from '../Assets/hero_image.png'; // Update the path as necessary
const Hero = () => {
  return (
    <div className='Hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="Hand Icon" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div> Latest Collections</div>
                <img src={arrow_icon} alt="Arrow Icon" />

            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  );
};

export default Hero;
