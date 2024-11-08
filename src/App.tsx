import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Videos } from './components/Videos';
import { CallToAction } from './components/CallToAction';
import { Services } from './components/Services';
import { LanguageToggle } from './components/LanguageToggle';

function App() {
  const [language, setLanguage] = useState<'en' | 'so'>('en');

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Videos language={language} />
      <section id="contact">
        <CallToAction language={language} />
      </section>
    </div>
  );
}

export default App;