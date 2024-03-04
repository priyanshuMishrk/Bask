// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enter from './Pages/Homepage'
import AboutUs from './Pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import InternalWork from './Pages/OurWorkInternal';
import ServiceInternal from './Pages/ServicesStrategy';
import Teams from './Pages/Teams';
import WorkInProgressPage from './Pages/WorkInProgress';
import AnimationComponent from './Pages/demo';
import ServiceCampaign from './Pages/ServicesCampaign';
import ServiceDesign from './Pages/ServicesDesign';
import ServiceMarketing from './Pages/ServicesMarketing';

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<Enter />} />
              <Route path="/aboutus" element={<AboutUs/>}/>
              <Route path="/workInternal" element={<WorkInProgressPage/>}/>
              <Route path='/strategy' element={<ServiceInternal/>}/>
              <Route path='/team' element={<Teams/>}/>
              <Route path='/demo' element= {<AnimationComponent/>}/>
              <Route path='/campaign' element={<ServiceCampaign/>}/>
              <Route path='/marketing' element={<ServiceMarketing/>}/>
              <Route path='/design' element={<ServiceDesign/>}/>
              
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
