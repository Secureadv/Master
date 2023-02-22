import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navabar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import Workshop from './components/Workshop/Workshop';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="workshop" element={<Workshop />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
