import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <>
        
        <div className="d-flex mainFooter"
        >
            {/* <Link className="FooterItems footItem1"to="/">
            Careers
            </Link>
            
            <Link className="FooterItems"to="/">
            Portfolio
            </Link> */}
          <Link to={'mailto:info@blackis.in'}>info@blackis.in</Link>
        
        </div>
      </>
    );
  };
  
  export default Footer;