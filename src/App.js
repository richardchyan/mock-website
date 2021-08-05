import About from './About';
import './App.css';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Team from './Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
