import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhatsSpecial from './components/WhatsSpecial';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollArrow from './components/ScrollArrow';
import CursorEffect from './components/CursorEffect';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative">
      <CursorEffect />
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhatsSpecial />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollArrow />
    </div>
  );
}

export default App;