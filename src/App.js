import Navbar  from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/AboutMe/about";
import Skills from "./components/Skills/skills";
import Certifications from "./components/Certifications/certifications";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
       <Navbar />
       <Intro />
       <About />
       <Skills />
       <Certifications />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
