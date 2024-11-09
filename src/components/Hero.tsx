import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'so';
}

export function Hero({ language }: HeroProps) {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const content = {
    en: {
      title: "Global Legal Excellence, Personalized Solutions",
      subtitle: "A premier international law firm with over 25 years of experience in corporate, civil, and cross-border litigation.",
      cta: "Schedule Consultation"
    },
    so: {
      title: "Adeeg Sharci oo Heer Caalami ah",
      subtitle: "Xafiis qareenno caalami ah oo leh waayo-aragnimo 25 sano ah oo ku aadan dacwadaha shirkadaha, madaniga ah, iyo kuwa ka baxsan xuduudaha.",
      cta: "La Tasho Qareenka"
    }
  };

  return (
    <header className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
      <img 
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
        alt="Arji International Law Office"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex items-center gap-3 mb-8">
          <img src="/logo.png" alt="Arji International" className="w-18 h-18" />
          <h2 className="text-2xl font-bold text-blue-400">ARJI INTERNATIONAL</h2>
        </div>
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {content[language].title}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            {content[language].subtitle}
          </p>
          <button
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            {content[language].cta} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}