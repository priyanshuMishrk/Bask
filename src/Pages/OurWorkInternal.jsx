import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";
import TabImage from "../Content/owiTab.png"
import OviBox from "./../Content/owiBoxes.png"
import OviRect from "./../Content/owiRect.png"
import { Link } from "react-router-dom";

const InternalWork = () => {
    return (
        <div className="">
          <Header />
          <Container className="">
            <div className="smallHeadOWI">
           <b className="italic">
           Puravankara Windemere,
            </b>  lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>


            <div className="d-flex owiTab">
                <div className="tabText">
                Integer iaculis, massa et interdum gravida, turpis nulla mollis turpis, in pretium elit metus in arcu. Curabitur rutrum leo quis eros pellentesque aliquam.
                </div>
                <div className="tabImage">
                    <img src={TabImage} alt="Tab " />
                    <img src={TabImage} alt="Tab " />
                    <img src={TabImage} alt="Tab " />
                    <img src={TabImage} alt="Tab " />
                </div>
            </div>
            <div className="d-flex oviBox">
                <img src={OviBox} alt="Box" />
                <img src={OviBox} alt="Box" />
                <img src={OviBox} alt="Box" />
            </div>
            <div className="d-flex oviGoals">
                <div className="d-flex oviGoalsText">
                    <span className="OviGoalsHead">
                    Problem Statement/Goals:
                    </span>
                    <span className="OviGoalsPar">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis, massa et interdum gravida, turpis nulla mollis turpis, in pretium elit metus in arcu. Curabitur rutrum leo quis eros pellentesque aliquam. Suspendisse malesuada ut leo in pellentesque. Proin interdum volutpat elit vitae vestibulum

                    </span>
                </div>
                <div className="oviGoalIm">
                <img src={OviBox} alt="Box" />
                </div>
            </div>
            <div className="d-flex oviApproach">
                <div className="oviApproachIm">
                    <img src={OviRect} alt="Box" />
                    <img src={OviRect} alt="Box" />
                </div>

                <div className="d-flex oviApproachText">
                    <span className="oviApproachTextHead">
                        What we did/Our approach:
                    </span>
                    <span className="oviApproachTextPar">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis, massa et interdum gravida, turpis nulla mollis turpis, in pretium elit metus in arcu. Curabitur rutrum leo quis eros pellentesque aliquam. Suspendisse malesuada ut leo in pellentesque. Proin interdum volutpat elit vitae vestibulum
                    </span>
                </div>
            </div>
            
            <div className="d-flex oviResult">
            
            <span className="oviResultHead">
            The result:
            </span>

            <span className="oviResultPar">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis, massa et interdum gravida, turpis nulla mollis turpis, in pretium elit metus in arcu. Curabitur rutrum leo quis eros pellentesque aliquam. Suspendisse malesuada ut leo in pellentesque. Proin interdum volutpat elit vitae vestibulum
                
            </span> 
            </div>

            <div className="oviUI">
            Date- mm/dd/yyyy, or in words
            </div>

            <div className="oviButtons">
                <Link to="" className="oviB1">Next Case Studies</Link>
                <Link to="" className="oviB2">All Projects</Link>
                <Link to="" className="oviB3"> Say hello</Link>
            </div>
          </Container>
          <Footer/>
        </div>
      );
}

export default InternalWork