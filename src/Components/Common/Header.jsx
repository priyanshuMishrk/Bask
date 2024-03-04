import React , {useState} from "react";
import { Container } from "react-bootstrap";
import Logo from "../../Content/BaskLogo.png"
import { Link } from "react-router-dom";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


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
          <div className="dropdown">

              <div className="dropdown-headers" onClick={toggleDropdown}>
        Services
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <Link to={'/strategy'}>Strategy</Link>
          <Link to={'/Campaign'}> Campaign </Link>
          <Link to={'/design'}>Design</Link>
          <Link to={'/marketing'}>Marketing</Link>
          {/* Add more options here */}
        </div>
      )}

          </div>
            
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
            <Link to="/aboutus" className="navButton rounded-4"> <i> Say Hello </i> </Link>
        </div>
        </nav>
      </>
    );
  };
  
  export default Header;
  