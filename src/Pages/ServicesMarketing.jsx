import React from "react";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";
import { Link } from "react-router-dom";
import MarketingImg from "./../Content/Marketing.png"

const ServiceMarketing = () => {
    return (
        <div className="">
            <Header />
        <div className="p-0 d-flex">
            <div className="ml" >
                <div className="servStrategy d-flex">
                    <div className="servStrategyText d-flex">
                        <span className="servStrategyTextHead">
                        Marketing
                        </span>

                        <span className="servStrategyTextPara">
                        All the best advertising
                        campaigns may have only minimal
                        effect if the brand's marketing is
                        flawed. Our marketing experts
                        help iron out the flaws with
                        appropriate marketing strategies
                        and services. We offer brand and
                        marketing audits and help
                        establish fulfilment journeys.
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
                        Our team understands that while a clever
                        campaign and distinct tonality go a long
                        way in setting you up, driving the right
                        audience to your table is a delicate
                        science. Pushing just far enough to excite
                        without alienating one's audience is a skill
                        we are proud to have. It's a skill our team
                        has honed over decades in the industry.
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
        <img src={MarketingImg} alt=""  className="StrategyMainImg"/>
        </div>
            <Footer />
        </div>
    );
}

export default ServiceMarketing