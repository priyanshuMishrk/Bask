////////////////////////////////////////////////////////////////
import React from "react";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";
import { Link } from "react-router-dom";
import CampaignImg from "./../Content/Campaign.png"

const ServiceCampaign = () => {
    return (
        <div className="">
            <Header />
        <div className="p-0 d-flex">
            <div className="ml" >
                <div className="servStrategy d-flex">
                    <div className="servStrategyText d-flex">
                        <span className="servStrategyTextHead">
                        Campaigns
                        </span>

                        <span className="servStrategyTextPara">
                        We create advertising campaigns
                        that unite a brand's communication
                        to position it uniquely in the minds of
                        the consumer through emotional
                        satisfaction and appeal. The brand
                        campaigns we work on are suitable
                        for print, TV, radio, films and all
                        digital media. We tell good stories,
                        the medium is just a little detail.
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
                        When you build a brand strategy, or a
                        communication strategy it takes into
                        account your target market, that which has
                        their attention at the moment and the way
                        everyone else is communicating. But all
                        the data in the world fails to convert
                        idleness to interest, interest to attention,
                        attention to connection and connection to
                        transaction- it really is the story you tell
                        that does most of the heavy lifting. And a
                        good story works for everyone.
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
                <Link to="/aboutus" className="bottomButton"> Say hello</Link>
                </div>

            </div>
        <img src={CampaignImg} alt=""  className="StrategyMainImg"/>
        </div>
            <Footer />
        </div>
    );
}

export default ServiceCampaign