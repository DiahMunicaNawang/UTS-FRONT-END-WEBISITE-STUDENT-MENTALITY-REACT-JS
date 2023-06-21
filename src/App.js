import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Content } from "./components/Content";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}



export default App;
