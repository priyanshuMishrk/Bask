import React from "react";
import Header from "../Components/Common/Header"
import Hero from "../Components/Hero";
import Footer from "../Components/Common/Footer";
import Dropdown from "../Components/DropDown";

const Enter = () => {
    return (
        <div className="p-0 mainpage">
          <Header />
          <Hero />
          <Dropdown/>
          <div className="bottomText-main">
            <div className="bottomText-main-head">
            "Indifference towards people and the reality in which they live is actually the one and only cardinal sin in design."
            </div>
            <div className="bottomText-main-para">
            Dieter Rams
            </div>
          </div>
          <Footer/>
        </div>
      );
}

export default Enter