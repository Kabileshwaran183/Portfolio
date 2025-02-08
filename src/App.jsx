import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";


const App = () => (
  <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
)
export default App;