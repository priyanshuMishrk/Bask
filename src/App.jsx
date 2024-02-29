import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enter from './Pages/Homepage'
import AboutUs from './Pages/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import InternalWork from './Pages/OurWorkInternal';
import ServiceInternal from './Pages/ServicesInternal';
import Teams from './Pages/Teams';
import WorkInProgressPage from './Pages/WorkInProgress';


function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<Enter />} />
              <Route path="/aboutus" element={<AboutUs/>}/>
              <Route path="/workInternal" element={<WorkInProgressPage/>}/>
              <Route path='/services' element={<ServiceInternal/>}/>
              <Route path='/team' element={<Teams/>}/>
              
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
