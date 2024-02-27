import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../../bask_creative_logo.jpeg"
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <>
        <nav className={"active w-100 p-4 d-flex align-items-center homeNav"}>
        <div>
            <Link to="/">
                  <img src={Logo} width={70} className="p-0 m-0 cp" alt="" />
            </Link>
            
        </div>
        
        <Container className="d-flex justify-content-between align-items-center"
        style={{
            width:"40%",
            marginRight:"5%"
        }}
        >
            <Link to="/services">
              Services
            </Link>
            
            <Link to="/workInternal">
            Case Studies
            </Link>
            
            <Link to="/team">
            The Team
            </Link>
            
            <Link to="/aboutus">
            About Us
            </Link>
        
        </Container>

        <div>
            <Link to="/aboutus" className="navButton rounded-4"> Say Hello</Link>
        </div>
        </nav>
      </>
    );
  };
  
  export default Header;
  