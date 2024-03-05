import React from "react";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";
import { Link } from "react-router-dom";
import DesignImg from "./../Content/Design.png"

const ServiceDesign = () => {
    return (
        <div className="">
            <Header />
        <div className="p-0 d-flex">
            <div className="ml" >
                <div className="servStrategy d-flex">
                    <div className="servStrategyText d-flex">
                        <span className="servStrategyTextHead">
                        Design
                        </span>

                        <span className="servStrategyTextPara">
                        Your visual identity as a brand communicates a large part of your story. We dress up brands with great logo design, extending that identity with unique graphic elements to create experiential design touchpoints that    tell the world the values you stand for.
                        </span>
                    </div>

                    {/* <div className="servStrategyImg">
                        <img src={ServiceImage} alt="" />
                        <img src={ServiceImage} alt="" />
                        <img src={ServiceImage2} alt="" />
                        <img src={ServiceImage2} alt="" />
                    </div> */}

                </div>

                {/* <div className="servCenterImage d-flex">
                    <img src={sCenterImg} alt="" />
                    <img src={sCenterImg} alt="" />
                    <img src={sCenterImg} alt="" />
                </div> */}


                <div className="HelpBox">
                    <div className="HelpText">
                        <span className="HelpTextHead">
                            Who is the service for and how does it help?
                        </span>

                        <span className="HelpTextPara">
                        A distinct visual identity helps with more than visibility and brand recall, it helps you connect with your target market. Your design communicates beyond what the copy says, and this implicit nonverbal communication forms the foundation of consumer trust and loyalty. A distinct and strategically designed visual identity is critical to every brand, big or small, irrespective of the industry or consumer they cater to.
                        </span>
                    </div>
                    {/* <div className="HelpImage">
                        <img src={Chess} alt="" />
                    </div> */}
                </div>
                {/* <div className="imgCollague">
                    <img src={ServiCollague} alt="" />
                    <img src={ServiCollague} alt="" />
                    <img src={ServiCollague} alt="" />
                    <img src={ServiCollague} alt="" />
                </div> */}
                <div className="bottomHead">
                    <span className="bottomHeader">
                        Getting customers is the role of marketing, keeping them is the role of branding.
                    </span>
                    <span className="bottomHeadPara">
                        Chris Do
                    </span>
                </div>
                <div className="bottomButtonDiv">
                <Link to="/contactus" className="bottomButton"> Say hello</Link>
                </div>

            </div>
        <img src={DesignImg} alt=""  className="StrategyMainImg"/>
        </div>
            <Footer />
        </div>
    );
}

export default ServiceDesign