import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
      <Toaster
        position="top-center"
      />
    </div>
  );
}

export default App;
