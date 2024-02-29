import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <>
        
        <div className="d-flex align-items-center mainFooter"
        >
            <Link className="FooterItems footItem1"to="/">
            Careers
            </Link>
            
            <Link className="FooterItems"to="/">
            Portfolio
            </Link>
        
        </div>
      </>
    );
  };
  
  export default Footer;