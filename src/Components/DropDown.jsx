import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const [isOpen4, setIsOpen4] = useState(false);

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  return (
    <div className='dropdown-main'>
        <div className="dropdown-container">
          {!isOpen && <div className="dropdown-header" onClick={toggleDropdown}>
            Who we are
          </div>}
          {isOpen && (
            <div className="dropdown-description" onClick={toggleDropdown}>
              <p> <b>Brighten up with Bask.  </b>  
               Bask is about brightening up the world. Driving change. Rebelling against convention. Pushing forward the agenda of progress in mind and spirit through creativity. Doing things that we love and having a positive impact on everyone who interact with  our work. And our culture.</p>
            </div>
          )}
        </div>
        <div className="dropdown-container1">
          { !isOpen1 && <div className="dropdown-header1" onClick={toggleDropdown1}>
            Our Services
          </div>}
          {isOpen1 && (
            <div className="dropdown-description1" onClick={toggleDropdown1}>
              <p>We cover all the essentials, but our services are intuitively designed to fit every size of business like a glove.<br/> Check them all out.</p>
            </div>
          )}
        </div>
        <div className="dropdown-container2">
          {!isOpen2 && <div className="dropdown-header2" onClick={toggleDropdown2}>
            Our Portfolio
          </div>}
          {isOpen2 && (
            <div className="dropdown-description2" onClick={toggleDropdown2}>
              <p>We’ve been around a while,  and we’ve earned the trust of several business owners, friends we didn’t know before.</p>
            </div>
          )}
        </div>
        <div className="dropdown-container3">
          { !isOpen3 && <div className="dropdown-header3" onClick={toggleDropdown3}>
            Join the team
          </div>}
          {isOpen3 && (
            <div className="dropdown-description3" onClick={toggleDropdown3}>
              <p>Join Our Team. write to us with how you break the clutter and how you want to be a meaningful part of the narrative and we’ll get in touch, if you don’t know where to go. if you do, we are happy to have you, just head on over. <br/> Explore Careers</p>
            </div>
          )}
        </div>
        <div className="dropdown-container4">
          { !isOpen4 && <div className="dropdown-header4" onClick={toggleDropdown4}>
            Let's get started
          </div>}
          {isOpen4 && (
            <div className="dropdown-description4" onClick={toggleDropdown4}>
              <Link to={"https://www.linkedin.com/company/baskworldwide-creative/"} target="_blank" className='dLink' >LinkedIn</Link>
                <Link to={"https://www.instagram.com/weare_bask/"}  target="_blank" className='dLink'>Instagram</Link>
                <Link to={"mailto:info@blackis.in"} className='dLink'>Email</Link>
            </div>
          )}
        </div>
    </div>
  );
};

export default Dropdown;