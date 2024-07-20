import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <img src="./time-image.png" alt="hero-image" />
        </div>
        <div className="hero-right">
          <h2>
            Let your customers <br /> know what time is <br /> avalaible in a
            day!
          </h2>
          <button className="hero-btn">Setup now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
