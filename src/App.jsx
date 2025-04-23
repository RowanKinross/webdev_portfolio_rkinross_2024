import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
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
        <Route path="/" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
    <Footer>
    </Footer>
    </>
  );
}

export default App;