import React from "react";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";
import ScrollingImages from "../Components/ImageSlider";
import t1 from "../Content/trustedBy1.png"
import t2 from "../Content/trustedBy2.webp"


const InternalWork = () => {
    return (
        <div className="">
          <Header />
          {/* <Container className="owiiiii">


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
                    <img src={workInternal6} alt="Box" className="LastIm" />
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
          </Container> */}
          <div className="m-3">
            <div className="superWork">
                OUR WORK
            </div>
            <ScrollingImages/>
            <div className="trustBy">
                    <div>TRUSTE BY</div>
                    <span>
                        <img src={t1} alt="" />
                        <img src={t2} alt="" />
                    </span>
                    <div>AND MANY MORE</div>
            </div>
          </div>
          <Footer/>
        </div>
      );
}

export default InternalWork