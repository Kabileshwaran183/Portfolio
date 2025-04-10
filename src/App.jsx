import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import FooterBottom from "./Components/FooterBottom";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Experience from './Components/Experience';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`w-full h-auto ${theme === 'dark' ? 'bg-bodyColor-dark text-fontColor-dark' : 'bg-bodyColor-light text-fontColor-light'}`}>
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Experience />
        <Education />
        <Projects />
        <Resume />
        <Contact />
      </div>
      
      <div id="about" className={`w-full ${theme === 'dark' ? 'bg-bodyColor-dark/90 text-fontColor-dark/90' : 'bg-bodyColor-light/90 text-fontColor-light/90'}`}>
        <Footer />
        <FooterBottom />
      </div>
    </div>
  )
}

export default App;