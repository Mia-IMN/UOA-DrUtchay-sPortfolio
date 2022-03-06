import { Parallax } from 'react-parallax';
import './App.css';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <Parallax className="App" strength={800}>
      <Navbar />
      <Homepage />
      <About />
      <Projects />
      <Skills />
      <ContactUs />
    </Parallax>
  );
}

export default App;
