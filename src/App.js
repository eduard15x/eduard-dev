import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
