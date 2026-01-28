import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AiFeature from './components/AiFeature';
import VideoSection from './components/VideoSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <AiFeature />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;