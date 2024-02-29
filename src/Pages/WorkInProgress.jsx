import React from 'react';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import Loader from '../Components/Loader';
import HomeButton from '../Components/HomeButton';

const WorkInProgressPage = () => {
  return (
    <>
    <div className="wip-container">
      <h1>This Page is a Work in Progress</h1>
      <p>We are currently working on making this page awesome. Please check back later!</p>
      {/* Add any additional content or dynamic elements here */}
    <HomeButton/>
    </div>
    <Loader/>
    </>
  );
}

export default WorkInProgressPage;
