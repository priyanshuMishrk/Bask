import React from "react";
import TextSlider from "../Components/TextSlider";
import DemoImage from "../Content/demo.png"

const Hero = () => {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center mb-5">
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