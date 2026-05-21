import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModelsGrid from './components/ModelsGrid';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <ModelsGrid />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

export default App;
