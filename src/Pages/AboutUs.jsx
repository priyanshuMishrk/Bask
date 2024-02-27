import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer";

const AboutUs = () => {
    return (
        <div className="p-0 m-1 mainpage">
          <Header />
          <Container className="invitationCont">
            <p className="invitation">Let’s get elaada and chai?</p>
            <div className="invitationInfo">
                <p className="infoHead">We are pretty easy to find.</p>
                <p className="infoPar">
                    Opposite Paragon, near Monkey Bar, 
                    right around Socials on Church Street,
                    and just down the road from Blossoms.
                </p>
            </div>
            <ul className="d-flex justify-content-between">
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Email</li>
                <li>Phone</li>
            </ul>
          </Container>
          <Footer/>
        </div>
      );
}

export default AboutUs