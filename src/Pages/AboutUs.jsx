import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";
import TabImage from "../Content/owiTab.png"
import OviBox from "./../Content/owiBoxes.png"
import OviRect from "./../Content/owiRect.png"
import { Link } from "react-router-dom";

import arrow from "../Content/rightArrow.svg"

const AboutUs = () => {
    return (
        <div className="">
          <Header />
          <Container >
          <div className="d-flex owiTab abousTab">
                <div className="tabText abousText">
                Brighten up with Bask. Bask is about brightening up the world. Driving change. Rebelling against convention. Pushing forward the agenda of progress in mind and spirit through creativity. Doing things that we love and having a positive impact on everyone who interact with our work. And our culture.
                </div>
            </div>
            <Link to={"/team"} className="aboutUS d-flex">
                <span>  MEET OUR TEAM  </span>
                <img src={arrow} alt="Arrow" className="arrow-icon" />
            </Link>
          </Container>
          <Footer/>
        </div>
      );
}

export default AboutUs