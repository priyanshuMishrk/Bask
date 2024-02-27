import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextSlider from "../Components/TextSlider";
import DemoImage from "../Content/demo.png"

const Hero = () => {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center">
            <TextSlider />
            <div className="imager">
                <img src={DemoImage} alt="Demo" />
                <img src={DemoImage} alt="Demo" />
                <img src={DemoImage} alt="Demo" />
            </div>
        </div>
      </>
    );
  };

  export default Hero;