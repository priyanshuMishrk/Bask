import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";
import TabImage from "../Content/owiTab.png"
import OviBox from "./../Content/owiBoxes.png"
import OviRect from "./../Content/owiRect.png"
import { Link } from "react-router-dom";
import ServiceImage from "./../Content/S1.png";
import ServiceImage2 from "../Content/S3.png"
import sCenterImg from "../Content/SCent.png"
import ServiCollague from "../Content/ServiCollage.png"

const ServiceInternal = () => {
    return (
        <div className="p-0 ">
            <Header />
            <Container>
                <div className="servStrategy d-flex">
                    <div className="servStrategyText d-flex">
                        <span className="servStrategyTextHead">
                            STRATEGY
                        </span>

                        <span className="servStrategyTextPara">
                            At Bask, we believe being creative begins with great strategy. Without great strategy, there’s no great creativity. You will see that every great campaign ever, every great brand that was ever created all flowed from insight -driven strategy. We help brands with strategic insights.
                        </span>
                    </div>

                    <div className="servStrategyImg">
                        <img src={ServiceImage} alt="" />
                        <img src={ServiceImage} alt="" />
                        <img src={ServiceImage2} alt="" />
                        <img src={ServiceImage2} alt="" />
                    </div>

                </div>

                <div className="servCenterImage d-flex">
                    <img src={sCenterImg} alt="" />
                    <img src={sCenterImg} alt="" />
                    <img src={sCenterImg} alt="" />
                </div>


                <div className="HelpBox">
                    <div className="HelpText">
                        <span className="HelpTextHead">
                            Who is the service for and how does it help?
                        </span>

                        <span className="HelpTextPara">
                            Strategy drives the conversation. It's a big fancy word for common sense decisions a brand makes when sharing their point of view. Your strategy is the stand your brand makes in a crowded world of stuff reaching for your audience's limited attention.
                        </span>
                    </div>
                    <div className="HelpImage">
                        <img src={OviBox} alt="" />
                    </div>
                </div>
                <div className="imgCollague">
                    <img src={ServiCollague} alt="" />
                    <img src={ServiCollague} alt="" />
                    <img src={ServiCollague} alt="" />
                    <img src={ServiCollague} alt="" />
                </div>
                <div className="bottomHead">
                    <span className="bottomHeader">
                        Getting customers is the role of marketing, keeping them is the role of branding.
                    </span>
                    <span className="bottomHeadPara">
                        Chris Do
                    </span>
                </div>
                <div className="bottomButtonDiv">
                <Link to="" className="bottomButton"> Say hello</Link>
                </div>

            </Container>
            <Footer />
        </div>
    );
}

export default ServiceInternal