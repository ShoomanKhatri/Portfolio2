import NavBar from "./Components/NavBar/navBar";
import { Intro } from './Components/Intro/Intro';
import {Skills} from './Components/Skills/Skills';
import Portfolio from "./Components/Works/works";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;