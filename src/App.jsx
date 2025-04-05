import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import FooterBottom from "./Components/FooterBottom";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`w-full h-auto ${theme === 'dark' ? 'bg-bodyColor text-lightText' : 'bg-gray-100 text-gray-800'} px-4`}>
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Education />
        <Projects />
        <Resume />
        <Contact />
      </div>
      
      <div className={`w-full ${theme === 'dark' ? 'bg-[#1d2023] text-[#afb0b3]' : 'bg-gray-200 text-gray-700'}`}>
        <Footer />
        <FooterBottom />
      </div>
    </div>
  )
}

export default App;