import About from './About';
import './App.css';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Team from './Team';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App h-full">
      <Helmet>
        <title>Markham Optometry</title>
      </Helmet>
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
