import React from "react";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";
import { Link } from "react-router-dom";
import StrategyImg from "./../Content/Strategy.png"

const ServiceInternal = () => {
    return (
        <div className="">
            <Header />
        <div className="p-0 d-flex">
            <div className="ml" >
                <div className="servStrategy d-flex">
                    <div className="servStrategyText d-flex">
                        <span className="servStrategyTextHead">
                            Strategy
                        </span>

                        <span className="servStrategyTextPara">
                            At Bask, we believe being creative begins with great strategy. Without great strategy, there’s no great creativity. You will see that every great campaign ever, every great brand that was ever created all flowed from insight-driven strategy. We help brands with strategic insights.
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
                            Strategy drives the conversation. It's a big fancy word for common sense decisions a brand makes when sharing their point of view. Your strategy is the stand your brand makes in a crowded world of stuff reaching for your audience's limited attention.
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
        <img src={StrategyImg} alt=""  className="StrategyMainImg"/>
        </div>
            <Footer />
        </div>
    );
}

export default ServiceInternal