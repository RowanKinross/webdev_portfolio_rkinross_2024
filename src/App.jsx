import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import NavToggle from './components/NavToggle/NavToggle';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Links from './components/Links/Links';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import './app.css'


function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="links" element={<Links />}/>
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
    <Footer>
    </Footer>
    </>
  );
}

export default App;