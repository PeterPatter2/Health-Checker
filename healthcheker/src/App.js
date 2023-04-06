import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBarComponent from './component/NavBarComponent';
import MainWeb from './pages/MainWeb';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs';
import StartCheckUp from './pages/StartCheckUp';
import Stresspage from './pages/Stresspage';
import Phq9page from './pages/Phq9page';
import Gad7page from './pages/Gad7page';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<MainWeb />} />
          <Route path="/start" element={<StartCheckUp />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/Stresspage' element={<Stresspage/>} />
          <Route path='/Phq9page' element={<Phq9page/>} />
          <Route path='/Gad7page' element={<Gad7page/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;