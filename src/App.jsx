import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StarsBackground from './components/StarsBackground';
import Home from './pages/Home/Home';
import Collection from './pages/Collection/Collection';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import LoginCadastro from './pages/LoginCadastro';



function App() {
  const [headerStyle, setHeaderStyle] = useState({
    opacity: 1,
    transform: 'translateY(0)',
    pointerEvents: 'auto'
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      const opacity = Math.max(0, 1 - currentScrollY / 150);
      const translateY = Math.min(30, currentScrollY / 5);
      
      setHeaderStyle({
        opacity: opacity,
        transform: `translateY(-${translateY}px)`,
        pointerEvents: opacity > 0.1 ? 'auto' : 'none'
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = {
    color: 'var(--diamond-primary)',
    textDecoration: 'none',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    letterSpacing: '0.2rem',
    position: 'relative',
    padding: '0.5rem 1rem',
    transition: 'all 0.4s ease-out',
    ':hover': {
      color: '#66c2ff'
    }
  };

  return (
    <Router>
      <StarsBackground />
      
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        zIndex: 100,
        transition: 'all 0.3s ease-out',
        ...headerStyle
      }}>
        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(2rem, 6vw, 3rem)',
          letterSpacing: '0.5rem',
          color: 'transparent',
          background: 'linear-gradient(to right, #e6f7ff, #b3e0ff, #66c2ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          textShadow: '0 0 15px rgba(102, 194, 255, 0.3)',
          margin: 0,
          fontWeight: 400,
          textTransform: 'uppercase',
          position: 'relative',
          display: 'inline-block',
          paddingBottom: '0.8rem',
          animation: 'diamondPulse 3s ease-in-out infinite'
        }}>
          LUXURY TIMEPIECES
          <span style={{
            position: 'absolute',
            bottom: '2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #e6f7ff, #b3e0ff, #66c2ff, #b3e0ff, #e6f7ff, transparent)',
            backgroundSize: '200% 100%',
            animation: 'flowAndPulse 3s ease-in-out infinite',
            borderRadius: '50%',
            filter: 'blur(0.3px)'
          }}></span>
        </h1>

        <nav style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/collection" style={navLinkStyle}>Coleção</Link>
          <Link to="/about" style={navLinkStyle}>Sobre</Link>
          <Link to="/contact" style={navLinkStyle}>Contato</Link>
        </nav>
      </header>
      
      <main style={{
        position: 'relative',
        paddingTop: '180px',
        minHeight: '100vh',
        zIndex: 1
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginCadastro />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;