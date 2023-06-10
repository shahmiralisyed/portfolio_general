import './App.scss';
import {About, Footer, Header, Testimonial, Projects, Skills} from './container';
import {Navbar} from './components';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Skills />
      <Testimonial />
      <Footer />
      
    </div>
  );
}

export default App;
