import About from './About';
import './App.css';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Team from './Team';

function App() {
  return (
    <div className="App h-full">
      <Banner />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
