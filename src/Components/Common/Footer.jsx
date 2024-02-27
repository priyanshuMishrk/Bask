import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <>
        
        <div className="d-flex justify-content-center align-items-center mainFooter"
        >
            <Link className="FooterItems"to="/">
            Careers
            </Link>
            
            <Link className="FooterItems"to="/">
            Clients
            </Link>
            
            <Link className="FooterItems"to="/">
            Portfolio
            </Link>
            
            <Link className="FooterItems"to="/">
            Social Media
            </Link>
        
        </div>
      </>
    );
  };
  
  export default Footer;