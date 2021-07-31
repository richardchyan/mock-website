import About from './About';
import './App.css';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Team from './Team';

function App() {
  return (
    <div className="App h-full">
      <Banner />
      <About />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
