import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setIsOpening(!isOpening);
  };

  const [selectedLink, setSelectedLink] = useState(null);
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  function handleLinkClick(link) {
      setSelectedLink(link);
      setSelectedDropdown(null);
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

  return (
    <div className="dropdown-menu3">
      <div className={`menu-icon3 ${isOpen ? 'open3' : ''}`} onClick={toggleDropdown}>
        <div className="line3"></div>
        <div className="line3"></div>
        <div className="line3"></div>
      </div>
      <div className={`dropdown-content3 ${isOpen ? 'show3' : ''}`}>
        <div className='miniDropdown' onMouseEnter={toggleDropdown1} onMouseLeave={toggleDropdown1}>
          <div className={selectedDropdown?.dropdown === 'services'  ? 'activeLSD' : ''}>Services</div>
          {isOpening && (<div className="dropdown-content-mini">
          <span to={'/strategy'} className={selectedDropdown?.dropdown === 'services' && selectedDropdown?.item === 'strategy' ? 'activeLSD' : ''} onClick={() => handleDropdownItemClick('services', 'strategy')}>Strategy</span>
          <span to={'/Campaign'} className={selectedDropdown?.dropdown === 'services' && selectedDropdown?.item === 'Campaign' ? 'activeLSD' : ''} onClick={() => handleDropdownItemClick('services', 'Campaign')}> Campaign </span>
          <span to={'/design'} className={selectedDropdown?.dropdown === 'services' && selectedDropdown?.item === 'design' ? 'activeLSD' : ''} onClick={() => handleDropdownItemClick('services', 'design')}>Design</span>
          <span to={'/marketing'} className={selectedDropdown?.dropdown === 'services' && selectedDropdown?.item === 'marketing' ? 'activeLSD' : ''} onClick={() => handleDropdownItemClick('services', 'marketing')}>Marketing</span>
        </div>)}
        </div>

        <p className={selectedLink === 'workInternal' ? 'activeLSD' : ''} onClick={() => handleLinkClick('workInternal')}>Our Work</p>
        <p className={selectedLink === 'team' ? 'activeLSD' : ''} onClick={() => handleLinkClick('team')}>The Team</p>
        <p className={selectedLink === 'aboutus' ? 'activeLSD' : ''} onClick={() => handleLinkClick('aboutus')}>About Us</p>
        <Link to={"/contactus"} className='HelloButton'> Say Hello</Link>
      </div>
      <style jsx>{`
        .activeLSD {
          text-decoration: underline !important;
        }
      `}</style>
    </div>
    
  );
};

export default DropdownMenu;
