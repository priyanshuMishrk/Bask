import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";
import TabImage from "../Content/owiTab.png"
import OviBox from "./../Content/owiBoxes.png"
import OviRect from "./../Content/owiRect.png"
import { Link } from "react-router-dom";
import WorkInternal1 from "../Content/workInternal1.jpeg"
import WorkInternal2 from "../Content/workInternal2.jpeg"
import WorkInternal3 from "../Content/workInternal3.jpeg"
import WorkInternal4 from "../Content/workInternal4.jpeg"
import workInternal5 from "../Content/workInternal5.jpg"
import workInternal6 from "../Content/workInternal6.jpg"
import workInternal7 from "../Content/workInternal7.jpg"
import workInternal8 from "../Content/workInternal8.jpg"


const InternalWork = () => {
    return (
        <div className="">
          <Header />
          <Container className="">


            <div className="d-flex owiTab">
                <div className="tabText">
                At Bask, we solve <span className="ye"> brand and communication </span>  problems with creativity, ideas, and
technology. We help brands become successful and loved. We are here to shake things up.
We want to be nothing short of a <span className="ye">revolution</span>.
                </div>
            </div>
            <div className="d-flex oviBox">
                <img src={WorkInternal1} alt="Box" />
                <img src={WorkInternal2} alt="Box" />
                <img src={WorkInternal3} alt="Box" />
            </div>
            <div className="d-flex oviGoals">
                <div className="d-flex oviGoalsText">
                    <span className="OviGoalsHead">
                    Creative Led
                    </span>
                    <span className="OviGoalsPar">
                    Everything we do at Bask has a creative angle. We know a problem can have many solutions, but the creative ones are also the most effective ones. It’s not just about constant improvement, but about constant creative improvement.

                    </span>
                </div>
                <div className="oviGoalIm">
                <img src={WorkInternal4}  alt="Box" />
                </div>
            </div>
            <div className="d-flex oviApproach">
                <div className="oviApproachIm">
                    <img src={workInternal5} alt="Box" />
                    <img src={workInternal6} alt="Box" />
                </div>

                <div className="d-flex oviApproachText">
                    <span className="oviApproachTextHead">
                    Idea Centric

                    </span>
                    <span className="oviApproachTextPar">
                        
                At Bask everything revolves around ideas. The search for the big idea fuels our existence.
                    </span>
                </div>
                
            </div>
            <div className="d-flex oviGoals">
                <div className="d-flex oviGoalsText">
                    <span className="OviGoalsHead">
                    Tech Intensive
                    </span>
                    <span className="OviGoalsPar">
                    We believe with the right tech we can have the flexibility to expand our thinking to areas we would not have otherwise explored as a brand agency. We use tech to bring better and more creative solutions for our clients’ problems.

                    </span>
                </div>
                <div className="oviGoalIm">
                <img src={workInternal7}  alt="Box" />
                </div>
            </div>
            <div className="d-flex oviGoals">
                <div className="oviGoalIm">
                <img src={workInternal8}  alt="Box" />
                </div>
                <div className="d-flex oviGoalsText">
                    <span className="OviGoalsHead">
                    Responsible
                    </span>
                    <span className="OviGoalsPar">
                    Our responsibility is to ourselves, our clients, our work, our people and to everyone who comes in contact with our work. We are here to enrich lives. And live an enriched life.

                    </span>
                </div>
            </div>
          </Container>
          <Footer/>
        </div>
      );
}

export default InternalWork