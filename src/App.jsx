import {Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MenuPage from "./pages/MenuPage";

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/home" element={<HomePage />} />
       <Route path="/menu" element={<MenuPage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
