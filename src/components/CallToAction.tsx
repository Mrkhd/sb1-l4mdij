import React, { useState } from 'react';
import { Phone, Building2 } from 'lucide-react';
import { ScheduleModal } from './modals/ScheduleModal';
import { OfficesModal } from './modals/OfficesModal';

interface CallToActionProps {
  language: 'en' | 'so';
}

export function CallToAction({ language }: CallToActionProps) {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isOfficesModalOpen, setIsOfficesModalOpen] = useState(false);

  const content = {
    en: {
      title: "Ready to Discuss Your Case?",
      subtitle: "Our team of legal experts are ready to help you navigate complex international legal challenges.",
      scheduleBtn: "Schedule a Call",
      officesBtn: "Visit Our Offices"
    },
    so: {
      title: "Diyaar ma u tahay inaad nagala hadasho Kiiskaaga?",
      subtitle: "Kooxdeena khubarada sharciga  ayaa diyaar u ah inay kaa caawiyaan xallinta caqabadaha sharciga ee caalamiga ah.",
      scheduleBtn: "Ballan Samayso",
      officesBtn: "Booqo Xafiisyadeena"
    }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
            <img src="/logo.svg" alt="Arji International" className="w-8 h-8" />
            <h3 className="text-xl font-bold text-blue-300">ARJI INTERNATIONAL</h3>
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">{content[language].title}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsScheduleModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 justify-center hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" /> {content[language].scheduleBtn}
            </button>
            <button
              onClick={() => setIsOfficesModalOpen(true)}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 justify-center hover:bg-white/10 transition-colors"
            >
              <Building2 className="w-5 h-5" /> {content[language].officesBtn}
            </button>
          </div>
        </div>
      </section>

      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        language={language}
      />
      
      <OfficesModal
        isOpen={isOfficesModalOpen}
        onClose={() => setIsOfficesModalOpen(false)}
        language={language}
      />
    </>
  );
}