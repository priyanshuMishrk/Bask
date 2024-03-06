import React , {useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import Logo from "../../Content/BaskLogo.png"
import { Link } from "react-router-dom";
import DropdownMenu from "../DropDown2";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth] = useState(window.innerWidth);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [selectedLink, setSelectedLink] = useState(null);
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  function handleLinkClick(link) {
    // setSelectedLink(link);
    // setSelectedDropdown(null); // Clear selected dropdown when a link is clicked
    // console.log('Selected Link:', link);
    // console.log('Selected Dropdown:', null); // Dropdown is cleared
      setSelectedLink(link);
      setSelectedDropdown(null); // Clear selected dropdown when a link is clicked
    
      // Create a new URLSearchParams object based on the current URL query parameters
      const queryParams = new URLSearchParams(window.location.search);

      queryParams.delete('selectedLink');
      queryParams.delete('selectedDropdown');
      // Set the value of the selectedLink parameter
      queryParams.set('selectedLink', link);
    
      // Get the updated query string with the new parameter
      const queryString = queryParams.toString();
    
      // Navigate to the new URL with the updated query string
      window.location.href = `/${link}?${queryString}`;
  };

  const handleDropdownItemClick = (dropdown, item) => {
    setSelectedLink(null); // Clear selected link when a dropdown item is clicked
    setSelectedDropdown({ dropdown, item });

    // Create a new URLSearchParams object based on the current URL query parameters
    const queryParams = new URLSearchParams(window.location.search);

    queryParams.delete('selectedLink');
    // Set the value of the selectedDropdown parameter
    queryParams.set('selectedDropdown', `${dropdown}:${item}`);

    // Get the updated query string with the new parameter
    const queryString = queryParams.toString();

    // Navigate to the new URL with the updated query string
    window.location.href = `/${item}?${queryString}`;
  };


  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const selectedLinkFromParams = queryParams.get('selectedLink');
    const selectedDropdownFromParams = queryParams.get('selectedDropdown');

    if (selectedLinkFromParams) {
      setSelectedLink(selectedLinkFromParams);
    }

    if (selectedDropdownFromParams) {
      const [dropdown, item] = selectedDropdownFromParams.split(':');
      setSelectedDropdown({ dropdown, item });
    }
  }, []);
  // const queryParams = new URLSearchParams(window.location.search);
  // console.log(queryParams, "ssssssssssssssss")
  // const selectedLinkFromParams = queryParams.get('');

  // useEffect(() => {
  //   if (selectedLinkFromParams) {
  //     setSelectedLink(selectedLinkFromParams);
  //   }
  // }, []);


    return (
      <>
      {screenWidth > 650 ? <>
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
  
              <div className="dropdown-headers" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <span className={selectedDropdown?.dropdown === 'services'  ? 'activeLSD' : ''}>
              Services
              </span>
        {/* <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i> */}
      {isOpen && (
        <div className="dropdown-content">
          <span to={'/strategy'} className={selectedDropdown?.dropdown === 'services' && selectedDropdown?.item === 'strategy' ? 'activeLSD' : ''} onClick={() => handleDropdownItemClick('services', 'strategy')}>Strategy</span>
          <span to={'/Campaign'} className={selectedDropdown?.dropdown === 'services' && selectedDropdown?.item === 'Campaign' ? 'activeLSD' : ''} onClick={() => handleDropdownItemClick('services', 'Campaign')}> Campaign </span>
          <span to={'/design'} className={selectedDropdown?.dropdown === 'services' && selectedDropdown?.item === 'design' ? 'activeLSD' : ''} onClick={() => handleDropdownItemClick('services', 'design')}>Design</span>
          <span to={'/marketing'} className={selectedDropdown?.dropdown === 'services' && selectedDropdown?.item === 'marketing' ? 'activeLSD' : ''} onClick={() => handleDropdownItemClick('services', 'marketing')}>Marketing</span>
          {/* Add more options here */}
        </div>
      )}
      </div>
  
          </div>
            
            <span className={selectedLink === 'workInternal' ? 'activeLSD spanyLink' : 'spanyLink'} onClick={() => handleLinkClick('workInternal')}>
            Our Work
            </span>
            
            <span className={selectedLink === 'team' ? 'activeLSD spanyLink' : 'spanyLink'} onClick={() => handleLinkClick('team')}>
            The Team
            </span>
            
            <span className={selectedLink === 'aboutus' ? 'activeLSD spanyLink' : 'spanyLink'} onClick={() => handleLinkClick('aboutus')}>
            About Us
            </span>
        
        </Container>
  
        <div>
            <Link to="/contactus" className="navButton rounded-4"> <i> Say Hello </i> </Link>
        </div>
        </nav>
        <style jsx>{`
        .activeLSD {
          text-decoration: underline !important;
        }
      `}</style>
      </>:<>'
      <div className="newHead">
        <div>
         <a href="/">
          <img src={Logo} alt="Logo" />
          </a> 
        </div>
        <DropdownMenu/>
      </div>
      </>}
      
      </>
    );
  };
  
  export default Header;
  