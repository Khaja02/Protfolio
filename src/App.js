import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
     <Navbar />
     <Home/>
     <SocialLinks/>
     <About/>
     <Projects className='my-52'/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;