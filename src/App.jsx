import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import FooterBottom from "./Components/FooterBottom";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";


const App = () => (
  <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Education />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <div className="w-full bg-[#1d2023] text-[#afb0b3]">
      <Footer />
      <FooterBottom />
      </div>

    </div>
)
export default App;