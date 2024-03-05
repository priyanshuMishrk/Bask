import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";

const ContactUs = () => {
    return (
        <div className="p-0 m-1 mainpage">
          <Header />
          <Container className="invitationCont">
            <p className="invitation">Let's chat over kebabs and suleimani?</p>
            <div className="invitationInfo">
                <p className="infoHead">We are pretty easy to find.</p>
                <p className="infoPar">
                    Just follow the smell of really, <i>really </i>, <b> really strong </b>
                    coffee and plum cake, and mountains of
                    shawarmas being carried in and you will have
                    found us. Right around the corner from Thom's
                    Bakery, we are pretty easy to spot.
                </p>
            </div>
            <ul className="d-flex justify-content-between">
                <li> <a href=""> Instagram </a> </li>
                <li> <a href=""> LinkedIn </a> </li>
                <li> <a href=""> Facebook </a> </li>
                <li> <a> Email </a></li>
                <li> <a> Phone </a></li>
            </ul>
          </Container>
          <Footer/>
        </div>
      );
}

export default ContactUs