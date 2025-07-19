import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure the app takes at least the full viewport height
  };

  const contentStyle = {
    flex: '1', // Allows content to grow and push footer down
  };

  return (
    <Router>
      <div style={appContainerStyle}>
        <Navbar />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Optional: Include Footer here */}
      </div>
    </Router>
  );
}

export default App;