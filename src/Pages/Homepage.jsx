import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Common/Header"
import TextSlider from "../Components/TextSlider";
import Hero from "../Components/Hero";
import Footer from "../Components/Common/Footer";

const Enter = () => {
    return (
        <div className="p-0 m-1 mainpage">
          <Header />
          <Hero />
          <Footer/>
        </div>
      );
}

export default Enter