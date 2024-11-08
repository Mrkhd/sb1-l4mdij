import React from 'react';
import { Star } from 'lucide-react';

interface CasesProps {
  language: 'en' | 'so';
}

const cases = {
  en: [
    {
      title: "International Arbitration Victory",
      amount: "$185M",
      description: "Successfully represented a multinational corporation in a complex cross-border dispute."
    },
    {
      title: "Global Class Action Settlement",
      amount: "$120M",
      description: "Led a multi-jurisdictional class action case spanning three continents."
    },
    {
      title: "Corporate Restructuring",
      amount: "$95M",
      description: "Guided a Fortune 500 company through international merger and acquisition."
    }
  ],
  so: [
    {
      title: "Guul Dhexdhexaadin Caalami ah",
      amount: "$185M",
      description: "Si guul leh ugu matalnay shirkad caalami ah khilaaf xuduud-dhaaf ah."
    },
    {
      title: "Heshiis Dacwad Wadareed",
      amount: "$120M",
      description: "Hogaaminay dacwad wadareed oo ka dhacday saddex qaaradood."
    },
    {
      title: "Dib-u-habayn Shirkadeed",
      amount: "$95M",
      description: "Hagid shirkad Fortune 500 ah oo ku aadan isku-dhafka iyo iibsiga caalami ah."
    }
  ]
};

export function Cases({ language }: CasesProps) {
  const content = {
    en: { title: "Global Impact Cases" },
    so: { title: "Kiisaska Saamaynta Caalamiga" }
  };

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">{content[language].title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases[language].map((case_, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Star className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{case_.title}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">{case_.amount}</p>
              <p className="text-gray-600">{case_.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}