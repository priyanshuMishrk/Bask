import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {

  return (
    <Link to="/" className="home-button">
      Go Back to Home
    </Link>
  );
}

export default HomeButton;
